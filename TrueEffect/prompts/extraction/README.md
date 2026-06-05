# Extraction Prompt Plan

## Purpose

Describe future prompt behavior for extraction workflows without writing production prompt text.

## Required Inputs

Source IDs, source excerpts, task context, user-safe context when relevant, risk category, and review status.

## Required Structured Outputs

Validated fields, source references, confidence, uncertainty, safety notes, and reviewer notes when needed.

## Risk Level

Risk depends on topic sensitivity, source quality, user impact, and whether the output is user-facing.

## Human Review Requirements

Sensitive topics, low confidence, conflicting sources, and publication candidates require review.

## Source-Grounding Requirements

Material claims must reference approved source IDs. Unsupported claims should be rejected or routed to review.
