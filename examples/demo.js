const {evaluate}=require('../src/evaluate');
console.log(evaluate({answerable:true},{abstained:false,citations:[{documentId:'demo',quote:'Sync every 30 minutes.'}],humanSupportReviewed:true},[{id:'demo',text:'Sync every 30 minutes.',approved:true,kind:'knowledge'}]));
