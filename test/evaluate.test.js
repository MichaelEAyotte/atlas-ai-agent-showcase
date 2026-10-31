const test=require('node:test'),assert=require('node:assert/strict'),{evaluate}=require('../src/evaluate');
const docs=[{id:'knowledge',text:'A fictional service syncs every 30 minutes.',approved:true,kind:'knowledge'},{id:'worksheet',text:'Expected answer',approved:true,kind:'test'}];
const response=()=>({abstained:false,citations:[{documentId:'knowledge',quote:'every 30 minutes'}],humanSupportReviewed:true});
test('approved exact passage with recorded human support passes',()=>assert.equal(evaluate({answerable:true},response(),docs).passed,true));
test('test worksheet contamination and invented passage fail',()=>{
 const a=response(); a.citations[0]={documentId:'worksheet',quote:'Expected answer'}; assert.equal(evaluate({answerable:true},a,docs).passed,false);
 const b=response(); b.citations[0].quote='every 10 minutes'; assert.equal(evaluate({answerable:true},b,docs).passed,false);
});
test('matching quote alone does not prove semantic support',()=>{const a=response(); a.humanSupportReviewed=false; assert.equal(evaluate({answerable:true},a,docs).passed,false);});
test('unanswerable case must abstain and schema errors cannot pass',()=>{
 assert.equal(evaluate({answerable:false},{abstained:true,citations:[]},docs).passed,true);
 assert.equal(evaluate({answerable:false},response(),docs).passed,false);
 assert.throws(()=>evaluate({},response(),docs),TypeError);
});
