import axios from "axios";
import NBPService from "./NBPService";
import Mocks from "./mocks";
jest.mock("axios");

test("fetchCurrentRate", async () => {
  const response = Mocks.axiosGet;
  axios.get.mockResolvedValue(response);
  const service = new NBPService();
  expect(await service.getCurrentRate("pln")).toBe(3.717);
});
