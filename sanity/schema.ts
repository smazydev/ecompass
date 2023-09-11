import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import landingPage from './schemas/landingPage'
import ad from './schemas/ad'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent,landingPage,ad],
}
