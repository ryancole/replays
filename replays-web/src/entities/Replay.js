import Immutable from "immutable";

export default Immutable.Record({
  id: undefined,
  awsKey: "",
  public: true,
  filename: "",
  filesize: 0,
  accountId: undefined,
  dateCreated: new Date(),
  accountUsername: ""
});
