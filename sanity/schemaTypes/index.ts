// sanity/schemaTypes/index.ts
import { type SchemaTypeDefinition } from 'sanity'
import project from './project' // Import your new schema

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project], // Add it to the array
}