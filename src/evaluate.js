'use strict';
function evaluate(scenario, response, corpus) {
 if (!scenario || typeof scenario.answerable!=='boolean' || !response || typeof response.abstained!=='boolean' || !Array.isArray(response.citations) || !Array.isArray(corpus)) throw new TypeError('Invalid evaluation schema');
 const record = value => value !== null && typeof value === 'object' && !Array.isArray(value);
 const id = value => typeof value === 'string' && value.trim().length > 0;
 if(corpus.some(d => !record(d) || !id(d.id) || typeof d.text !== 'string' || typeof d.approved !== 'boolean' || !['knowledge','test'].includes(d.kind)) || response.citations.some(c => !record(c) || !id(c.documentId) || typeof c.quote !== 'string')) throw new TypeError('Invalid evidence schema');
 const ids=corpus.map(d=>d.id); if(new Set(ids).size!==ids.length) throw new Error('Duplicate document ID');
 const allowed=new Map(corpus.filter(d=>d.approved===true && d.kind==='knowledge').map(d=>[d.id,d]));
 const errors=[];
 if(!scenario.answerable) {
   if(!response.abstained || response.citations.length) errors.push('Unanswerable question must abstain without citations');
 } else {
   if(response.abstained || !response.citations.length) errors.push('Answer requires evidence');
   for(const c of response.citations) {
     const doc=allowed.get(c.documentId);
     if(!doc) errors.push('Citation is outside the approved knowledge corpus');
     else if(typeof c.quote!=='string' || !c.quote.trim() || !doc.text.includes(c.quote)) errors.push('Quoted passage is absent from source');
   }
   if(response.humanSupportReviewed!==true) errors.push('Semantic support requires recorded human review');
 }
 return {passed:errors.length===0,errors};
}
module.exports={evaluate};
