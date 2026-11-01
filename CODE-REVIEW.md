# Synthetic evaluation harness

This harness was newly implemented for the GitHub review. It is not exported ATLAS runtime code and was not used for the historical acceptance results. All example text is fictional.

It checks approved-source membership, excludes test worksheets from the knowledge set, verifies quoted substrings and requires an explicit human-support review flag. It refuses schema errors and checks abstention on an unanswerable case. The flag is a test record, not a trusted attestation: this code cannot determine whether a passage logically supports an answer. Human review remains necessary.

Run `npm test` and `npm run demo`. Replace fictional cases only in a private evaluation workspace after reviewing the corpus. No Open WebUI endpoint, model call, provider route, credentials or network isolation operation is included. Passing these unit tests establishes neither retrieval quality nor offline operation. The earlier documented LOCAL acceptance results remain exactly as described in TESTING.md.

The deliberate lesson is that a plausible answer or a citation label alone is insufficient evidence. This code makes structural checks reproducible while keeping semantic support and runtime acceptance explicit.

## Authorship and evidence boundary

The executable module, example and standalone tests are new AI-assisted synthetic demonstration code prepared during the owner-directed GitHub initiative. They are not an export of the operating system or evidence of an independently implemented production service. This disclosure distinguishes the integration and evaluation work described in the case study from the demonstration code added for review.

The source, tests, fictional examples, original documentation and SVG diagram were reviewed for publication; no third-party implementation, client records or private operational payloads are bundled. The current [PolyForm Noncommercial License 1.0.0](LICENSE) applies only to the owner-controlled, protectable material covered by the [required notice and scope](NOTICE). The AI-assistance disclosure does not establish copyrightability or exclusive human authorship of every element; no copyright is claimed in uncopyrightable portions. Open WebUI, Ollama, Obsidian, Nextcloud, n8n, models, indexing utilities and external GitHub Actions retain their respective licenses and are excluded from this grant.

The initial public release used MIT. Its previous permissions, including commercial use and redistribution under MIT's terms, remain available as described in the [license history](PUBLICATION.md); this prospective policy does not revoke them. [Contribution terms](CONTRIBUTING.md) preserve contributors' ownership and require separate written rights before contributor-owned material can be offered under a separate commercial license. The historical acceptance records remain summarized evidence, not fresh live test results.
