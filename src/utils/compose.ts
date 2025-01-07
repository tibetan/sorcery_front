type HOC<TInner, TOuter> = (
  component: React.ComponentType<TInner>
) => React.ComponentType<TOuter>;

const compose = <P,>(...hocs: HOC<any, any>[]) => (
  component: React.ComponentType<P>
): React.ComponentType<any> =>
  hocs.reduceRight((wrapped, hoc) => hoc(wrapped), component);

export default compose;
