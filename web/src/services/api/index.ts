import { config } from "../../config/config";
import { ApiClient } from "../../protos/ApiServiceClientPb";

export const apiClient = new ApiClient(config.envoyUrl);
