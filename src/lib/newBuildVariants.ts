import BuildVariantsBuilder from './BuildVariantsBuilder'

/**
 * Shortcut to instanciate a new BuildVariantsBuilder instance, directly after the
 * styled declaration.
 *
 * Usage:
 *
 * const Div = styled.div<ITestProps>(props => {
 *   return styleVariants(props, builder => {
 *     return builder
 *       .css({
 *         color: 'red'
 *       })
 *       .end()
 *   })
 * })
 */
export function newBuildVariants<
  TProps extends object,
  TCSSObject extends object
>(props: TProps): BuildVariantsBuilder<TProps, TCSSObject> {
  return new BuildVariantsBuilder<TProps, TCSSObject>(props)
}
