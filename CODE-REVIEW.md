# Synthetic evaluation harness

This harness was newly implemented for the GitHub review. It is not exported ATLAS runtime code and was not used for the historical acceptance results. All example text is fictional.

It checks approved-source membership, excludes test worksheets from the knowledge set, verifies quoted substrings and requires an explicit human-support review flag. It refuses schema errors and checks abstention on an unanswerable case. The flag is a test record, not a trusted attestation: this code cannot determine whether a passage logically supports an answer. Human review remains necessary.

Run `npm test` and `npm run demo`. Replace fictional cases only in a private evaluation workspace after reviewing the corpus. No Open WebUI endpoint, model call, provider route, credentials or network isolation operation is included. Passing these unit tests establishes neither retrieval quality nor offline operation. The earlier documented LOCAL acceptance results remain exactly as described in TESTING.md.

The deliberate lesson is that a plausible answer or a citation label alone is insufficient evidence. This code makes structural checks reproducible while keeping semantic support and runtime acceptance explicit. License selection remains pending owner approval.
