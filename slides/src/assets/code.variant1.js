export default `
const Markup = () =>
  isExperimentB ? (
    <BagChooser />
  ) : (
    <BagChooser restrictions={true} />
  );
`;
