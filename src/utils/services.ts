import axios from "axios";
import type {
  CustomQuoteRequestDto,
  PackageQuoteRequestDto,
  VerifyPurchaseDto,
  ContactFormDto,
  PowerflexResponseDto,
  PackageDto,
  DropoffAnalyticsResponse,
} from "./types";
// import { PRODUCT_PLANS } from "./constants";
// import { SAMPLE_STEP_TWO_RESPONSE } from "./constants";

const api = axios.create({
  baseURL: "https://slp.connectwithsapphire.com/v1/powerflex",
  headers: {
    "Content-Type": "application/json",
  },
});

export const calculateCustomQuote = async (
  payload: CustomQuoteRequestDto
): Promise<PowerflexResponseDto> => {
  const { data } = await api.post<PowerflexResponseDto>("/calculate", payload);
  // const data = SAMPLE_STEP_TWO_RESPONSE;
  return data;
};

export const getPackages = async (): Promise<PackageDto[]> => {
  const { data } = await api.get<PackageDto[]>("/packages");
  // const data = PRODUCT_PLANS
  return data;
};

export const getPackageDetails = async (id: string): Promise<PackageDto> => {
  const { data } = await api.get<PackageDto>(`/packages/${id}`);
  return data;
};

export const calculatePackageQuote = async (
  id: string,
  payload: PackageQuoteRequestDto
): Promise<PowerflexResponseDto> => {
  const { data } = await api.post<PowerflexResponseDto>(
    `/packages/${id}/quote`,
    payload
  );
  return data;
};

export const verifyPurchase = async (
  payload: VerifyPurchaseDto
): Promise<{ message: string; powerflexRef: string }> => {
  const { data } = await api.post(`/verify-purchase`, payload);
  return data;
};

export const submitContactForm = async (
  payload: ContactFormDto
): Promise<{ message: string }> => {
  const { data } = await api.post(`/contact`, payload);
  return data;
};

export const getDropoffAnalytics = async (
  page: number,
  limit: number
): Promise<DropoffAnalyticsResponse> => {
  const { data } = await api.get<DropoffAnalyticsResponse>(
    `/dropoffs/analytics?page=${page}&limit=${limit}`
  );
  return data;
};
