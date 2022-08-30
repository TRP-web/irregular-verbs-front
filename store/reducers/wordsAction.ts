import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IWord } from "../../model/Word";
import { apiUrls, backUrl } from "../../urls/urls";

export const fetchWords = createAsyncThunk(
    "word/fetchAll",
    async (token: string) => {
        const url = `${backUrl}${apiUrls.getWords}`
        const response = await axios.get<IWord[]>(url, { headers: { token: token } })
        return response.data
    }
)