import { HttpStatusCode } from "../../utils/http-status-codes";
import { AdditionalData } from "../types";

export class Result<T> {
  public status?: HttpStatusCode;
  public data?: T;

  constructor(data?: T, status?: HttpStatusCode) {
    this.status = status;
    this.data = data;
  }

  setStatus(status: HttpStatusCode): Result<T> {
    this.status = status;
    return this;
  }
}

export class ResultSuccess<T> extends Result<T> {
  public status: HttpStatusCode = HttpStatusCode.OK;
  constructor(data?: T, status: HttpStatusCode = HttpStatusCode.OK) {
    super(data, status);
  }
}

export class ResultError extends Result<AdditionalData> {
  public readonly message: string;
  constructor(
    message: string,
    status: HttpStatusCode = HttpStatusCode.INTERNAL_SERVER_ERROR,
    additionalData?: AdditionalData,
  ) {
    super(additionalData, status);
    this.message = message;
  }
}
