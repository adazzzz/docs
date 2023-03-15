import { Callout } from 'nextra-theme-docs'

export default function CalloutUseIndexer() {
  return (
    <Callout type="info">
      Though the contract offers these read methods, they are not ideal for use
      in a production environment for performance concerns. We recommend using
      the indexer instead.
    </Callout>
  )
}
