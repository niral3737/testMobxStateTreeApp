import { types } from "mobx-state-tree";

const Invoice = types.model("Invoice", {
  name: types.string
});

export default Invoice;
