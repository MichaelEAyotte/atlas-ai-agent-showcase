# Engineering challenges and lessons

## Retrieval can work while investigation fails

The diagnostic assessment showed that a directed request could read the relevant procedure and identify the correct component. A separate independent investigation listed documents and searched for a generic change term, but did not visibly read the needed procedure before answering. It then supplied references without demonstrated supporting reads.

The useful distinction is between access to knowledge and evidence gathering. The next evaluation should score discovery, passage retrieval and supported conclusions separately. Adding more documents or rewriting a broad system prompt does not by itself demonstrate improvement.

## Names can hide different responsibilities

The records distinguish the synchronization software from the container running it. Confusing these makes troubleshooting less precise: the operator needs to know whether to inspect the transfer path, scheduled process, indexer or chat layer. The retrieval answer key therefore checks the component relationship rather than accepting loosely similar terminology.

## A failed precondition is not a failed model answer

An earlier retrieval attempt could not invoke its configured model. It was recorded as Blocked. A later run passed after the assistant was available. Keeping both records avoids attributing infrastructure failure to retrieval quality or silently hiding an unsuccessful attempt.

## Functional success is narrower than architectural proof

The LAN chat test was accepted for its functional purpose. Historical request-to-backend correlation and full exclusion of cloud dependencies were not established and were assigned to a separate destination test. This makes the acceptance decision useful without claiming more than the observations support.

## Advisory troubleshooting can still be unsafe

The earlier assessment identified cache clearing and index refresh under a read-only heading. Neither action should be described as observation. A future assistant should first collect evidence, then state the proposed change and its impact, and obtain authorization through an enforceable workflow.

## Next experiment

Hold the model and corpus constant. Compare directed lookup and independent discovery on the same synthetic source set. Record every tool call and map every factual claim to a returned passage. Add missing-source and conflicting-source cases before attempting service automation. This is a proposed experiment; no comparative improvement is claimed yet.
