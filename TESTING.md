# Testing methodology and evidence status

The supplied acceptance matrix distinguishes functional chat, grounded retrieval, network independence, knowledge quality, authorization and recovery. Results below are **recorded in supplied documentation**, not rerun by this portfolio audit.

| Test | Recorded state | What can be claimed |
|---|---|---|
| LOCAL-01 � LAN chat and inference | Pass | Two functional runs succeeded; criteria were narrowed to the functional purpose and existing evidence reassessed |
| LOCAL-02 � approved-document retrieval | Pass, approved and closed | Two fresh chats matched an independently checked answer key and returned the supporting approved passage |
| LOCAL-03 � WAN unavailable | Blocked at preflight | Safe isolation and independent recovery were not established; offline capability remains unproven |
| LOCAL-04 � DNS/proxy unavailable | Not run | No outage-resilience claim |
| LOCAL-05 � inference unavailable | Not run | No verified failure-behavior claim |
| LOCAL-06 � inference/embedding/workflow destinations | Not run | No comprehensive cloud-exclusion claim |
| KNOW-01 � missing/stale/conflicting facts | Not run | General knowledge-quality acceptance incomplete |
| KNOW-02 � corpus scope/security | Not run | Complete corpus separation not established |
| SEC-01 � prompt injection/authorization | Not run | No adversarial security acceptance claim |
| SEC-02 � replay/write safety | Not run | No accepted write automation |
| REC-01 � isolated restoration | Not run | No verified recovery-readiness claim |

## Retrieval acceptance method

Before testing, independently inspect an approved document and record its answer key. Ask the same question in two fresh chats with unchanged configuration and source corpus. Save complete responses, citations and retrieval traces. Pass only when both answers match the key, identify a supporting approved source and show that the relevant content was returned.

LOCAL-02's successful record concerns one specific synchronization fact. A prior invocation failed with �Model not found� and remains preserved. An exploratory pair with changing corpus content was excluded from the final decision. One accepted response also cited an evaluation worksheet; it returned the independent approved passage as well. That is a reason to improve corpus hygiene, not to claim that the whole retrieval system is reliable.

## Evidence discipline

- Save the prompt, source revision, model/configuration, complete response and tool trace under a new execution ID.
- Keep answer keys and test transcripts outside the indexed corpus for future evaluations.
- Separate discovery tests from directed lookup tests. Supplying the filename changes what is being evaluated.
- Record failures and blocked preconditions without converting them to passes.
- Capture repeated runs before publishing reliability or latency statistics. Existing point-in-time telemetry is not a benchmark.

## Scope of this portfolio review

The acceptance worksheets and matrix were inspected. Some LOCAL-01 evidence assets are in the supplied archive; separate LOCAL-02 result files are referenced outside it and were not independently retrieved. No live inference, network isolation, configuration change or administrative action was executed here. The public result labels intentionally say �recorded Pass.�

Use the [synthetic scenarios](evaluation/SCENARIOS.md) for a safe review of the evaluation method. Their results remain Not run.
