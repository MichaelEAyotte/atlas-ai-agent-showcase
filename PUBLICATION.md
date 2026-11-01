# Publication scope and verification record

The initial public release incorporated the reviewed work into `main` under MIT for eligible owner-controlled original material, without rewriting history. That release remains preserved. The owner has since selected the unmodified PolyForm Noncommercial License 1.0.0 for prospective distributions of eligible material under the current policy. The repository remains public and covers the same sanitized case study and synthetic evaluator.

## Evidence and scope

The evaluator is newly created AI-assisted synthetic demonstration code, not an exported ATLAS runtime. Historical LOCAL-01/02 evidence is documented, while LOCAL-03 remains blocked. These unit tests do not prove retrieval quality, network isolation or live acceptance. No fresh Ollama or Open WebUI acceptance run was performed for publication.

The release preparation reran `npm test` with **5 passing tests** and `npm run demo` successfully on Node 24.19.0. No npm runtime or development dependencies are declared. GitHub Actions runs only those two commands, with pinned actions, read-only contents permission and disabled persisted checkout credentials. Actionlint passed. Runtime and hosted runner updates remain external dependencies. The npm `private` flag remains enabled; GitHub publication does not publish an npm package.

The pre-release remote heads matched the prior review: `main` at `537b093c0b1bce86109f86b97119684e807b5cdd` and the audited branch at `4219f563f9ec92f3b85460bb0b177c0946fa7e2f`. That fetched history contains five commits and 31 distinct UTF-8 text blobs, with no binary/non-UTF8 blobs. The established Gitleaks 8.30.1 and private-address/credential/email checks are repeated for the final release candidate, including reachable history; publication requires no findings and successful Git integrity checks. Scans reduce risk but cannot prove absence of every sensitive detail. Historical commits and their original noreply identities are preserved.

Local Markdown targets are checked for the release. The architecture SVG is an original sanitized explanatory diagram, not an operational screenshot. The unused draft screenshot placeholder has been removed. There are no copied production deployment files, private knowledge-base contents, account payloads or client records in the selected source.

## License and provenance

The current [PolyForm Noncommercial License 1.0.0](LICENSE) is the unmodified official text. It applies only to the owner-controlled, protectable source, tests, fictional examples, original diagram and documentation identified in [NOTICE](NOTICE). Copyright holder: **Michael E. Ayotte**. This is source-available software, not OSI-approved open source. The official license defines permitted purposes; this documentation does not narrow them. Commercial use outside those permitted purposes requires separate written permission from [Michael E. Ayotte](https://github.com/MichaelEAyotte).

The current files and reachable source history were reviewed for bundled third-party implementations and notices. No third-party package or template implementation is bundled. Open WebUI, Ollama, Obsidian, Nextcloud, n8n, models, indexing utilities and external GitHub Actions retain their respective licenses and are excluded. This policy does not relicense private production repositories or client material, imply product endorsement, or claim copyright in uncopyrightable AI-generated portions. [Source provenance and authorship](CODE-REVIEW.md) retain the AI-assisted synthetic-code disclosure and historical-evidence limits. Distributions under PolyForm must comply with its notice requirements, including the separate required notice.

## Earlier MIT release

The initial MIT release is preserved at commit [`a2b51612b32190500f922c36978884cda3d04cf7`](https://github.com/MichaelEAyotte/atlas-ai-agent-showcase/tree/a2b51612b32190500f922c36978884cda3d04cf7), including its [MIT license and copyright notice](https://github.com/MichaelEAyotte/atlas-ai-agent-showcase/blob/a2b51612b32190500f922c36978884cda3d04cf7/LICENSE).

Previous MIT permissions remain in effect, including commercial use and redistribution under MIT's terms. Unchanged code remains available from that MIT-licensed history. Replacing the current license file does not retrospectively revoke those permissions or create newly exclusive commercial rights over those copies. The new distribution policy applies prospectively to distributions offered under PolyForm; it does not replace existing MIT grants. Repository history and the original MIT notice remain preserved in the linked commit.

[Contribution terms](CONTRIBUTING.md) require authorized submissions under the same PolyForm terms for eligible material. Contributors retain their own copyright. Contribution alone does not assign copyright or authorize separate commercial licensing; contributor-owned material requires separate written rights before it can be licensed commercially.

## Release verification

The initial release verified the default README, MIT license, test-only workflow and anonymous repository access. The license correction checks the official license bytes, final diff, tests, demo and documentation links while preserving implementation files, workflow and public visibility. It does not rerun live-model acceptance or change the historical security findings. A passing synthetic evaluator is not an ATLAS runtime or production-readiness certification.
