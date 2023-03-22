# Slidev Setup Sample

## Target

This project aims to provide multiple slide shows created with [slidev](https://sli.dev/) with the same assets.

By default, a slidev project will assume that there is one presentation per git repo.

For us, it would make more sense to have a monorepo in place where all pages and slides are stored.

## Issue

To resolve the filepath to a page, I created a custom property `@page` that is processed by a preparser and replaced by a `src`.
This preparser should be applied to all decks, so it comes as dependency. Yet, slidev does not recognize this and does not apply the preparser unless being copied to each project.