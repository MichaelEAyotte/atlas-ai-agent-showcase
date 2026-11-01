# Publication scope and verification record

The owner authorized incorporating the reviewed work into `main` without rewriting history and publishing this repository under MIT for eligible owner-controlled original material. This supersedes the earlier pending-approval note. The release covers this sanitized case study and its synthetic evaluator.

## Evidence and scope

The evaluator is newly created AI-assisted synthetic demonstration code, not an exported ATLAS runtime. Historical LOCAL-01/02 evidence is documented, while LOCAL-03 remains blocked. These unit tests do not prove retrieval quality, network isolation or live acceptance. No fresh Ollama or Open WebUI acceptance run was performed for publication.

The release preparation reran `npm test` with **5 passing tests** and `npm run demo` successfully on Node 24.19.0. No npm runtime or development dependencies are declared. GitHub Actions runs only those two commands, with pinned actions, read-only contents permission and disabled persisted checkout credentials. Actionlint passed. Runtime and hosted runner updates remain external dependencies. The npm `private` flag remains enabled; GitHub publication does not publish an npm package.

The pre-release remote heads matched the prior review: `main` at `537b093c0b1bce86109f86b97119684e807b5cdd` and the audited branch at `4219f563f9ec92f3b85460bb0b177c0946fa7e2f`. That fetched history contains five commits and 31 distinct UTF-8 text blobs, with no binary/non-UTF8 blobs. The established Gitleaks 8.30.1 and private-address/credential/email checks are repeated for the final release candidate, including reachable history; publication requires no findings and successful Git integrity checks. Scans reduce risk but cannot prove absence of every sensitive detail. Historical commits and their original noreply identities are preserved.

Local Markdown targets are checked for the release. The architecture SVG is an original sanitized explanatory diagram, not an operational screenshot. The unused draft screenshot placeholder has been removed. There are no copied production deployment files, private knowledge-base contents, account payloads or client records in the selected source.

## License and provenance

The [MIT License](LICENSE), copyright **2026 Michael E. Ayotte**, applies to the eligible owner-controlled source, tests, fictional examples, original diagram and documentation included here. The owner explicitly approved that license and publication. [Source provenance and authorship](CODE-REVIEW.md) retain the AI-assisted synthetic-code disclosure and historical-evidence limits.

The current files and reachable source history were reviewed for bundled third-party implementations and notices. No third-party package or template implementation is bundled, and no pre-existing license or required third-party notice has been removed. Open WebUI, Ollama, Obsidian, Nextcloud, n8n, models and indexing utilities remain separate products under their respective licenses. Their names do not imply endorsement, and this license does not relicense them, private production repositories or client material. Retain the copyright and permission notice when reusing the licensed material.

## Release verification

The release procedure rechecks the remote heads, final diff, tests, internal links, reachable-history privacy/security scan and test-only workflow before moving `main` and changing visibility. It then verifies the default README, license, workflow result and anonymous repository access. A passing synthetic evaluator is not an ATLAS runtime or production-readiness certification.
