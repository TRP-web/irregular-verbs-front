import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IActiveList } from "../../model/activeList";
import { INewWord } from "../../model/newWord";
import { apiUrls, backUrl } from "../../urls/urls";

interface IArg {
    token: string,
    active: IActiveList
}

export const fetchNewWords = createAsyncThunk(
    "newWords",
    async (arg: IArg) => {
        const url = `${backUrl}${apiUrls.getNewWords}${arg.active}`

        const res = await axios.get<INewWord>(url, { headers: { token: arg.token } })
        console.log(res.data)
        return res.data
    }
)