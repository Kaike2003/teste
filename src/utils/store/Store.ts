import { create } from "zustand"

type TModalIdentyCard = {
    modal: boolean
}

type TActionIdentyCard = {
    setModal: (id: TModalIdentyCard["modal"]) => void
}

export const useModalIdentityStore = create<TModalIdentyCard & TActionIdentyCard>()((set) => ({
    modal: false,
    setModal: (data) => set((state) => ({ modal: data }))
}))

type TModalIdentyCardView = {
    modal: boolean
}

type TActionIdentyCardView = {
    setModal: (id: TModalIdentyCard["modal"]) => void
}

export const useModalIdentityStoreView = create<TModalIdentyCardView & TActionIdentyCardView>()((set) => ({
    modal: false,
    setModal: (data) => set((state) => ({ modal: data }))
}))

type TModalIdentyCardPut = {
    modal: boolean
}

type TActionIdentyCardPut = {
    setModal: (id: TModalIdentyCardPut["modal"]) => void
}


export const useModalIdentityCardStorePut = create<TModalIdentyCardPut & TActionIdentyCardPut>()((set) => ({
    modal: false,
    setModal: (data) => set((state) => ({ modal: data }))
}))

type TModalNumberIdentity = {
    modal: boolean
}

type TActionNumberIdentity = {
    setModal: (id: TModalIdentyCardPut["modal"]) => void
}


export const useModalNumberIdentity = create<TModalNumberIdentity & TActionNumberIdentity>()((set) => ({
    modal: false,
    setModal: (data) => set(() => ({ modal: data }))
}))



type TModalFingerPrint = {
    modal: boolean
}

type TActionFingerPrint = {
    setModal: (id: TModalIdentyCardPut["modal"]) => void
}


export const useModalFingerPrint = create<TModalFingerPrint & TActionFingerPrint>()((set) => ({
    modal: false,
    setModal: (data) => set((state) => ({ modal: data }))
}))


type TModalUser = {
    modal: boolean
}

type TActionUser = {
    setModal: (id: TModalUser["modal"]) => void
}


export const useModalUser = create<TModalUser & TActionUser>()((set) => ({
    modal: false,
    setModal: (data) => set(() => ({ modal: data }))
}))



type TModalUserPutBasic = {
    modal: boolean
}

type TActionUserPutBasic = {
    setModal: (id: TModalUser["modal"]) => void
}


export const useModalUserPutBasic = create<TModalUserPutBasic & TActionUserPutBasic>()((set) => ({
    modal: false,
    setModal: (data) => set(() => ({ modal: data }))
}))

type TModalUserPutEmail = {
    modal: boolean
}

type TActionUserPutEmail = {
    setModal: (id: TModalUser["modal"]) => void
}


export const useModalUserPutEmail = create<TModalUserPutEmail & TActionUserPutEmail>()((set) => ({
    modal: false,
    setModal: (data) => set(() => ({ modal: data }))
}))

type TModalUserPutPassword = {
    modal: boolean
}

type TActionUserPassword = {
    setModal: (id: TModalUser["modal"]) => void
}

export const useModalUserPassword = create<TModalUserPutPassword & TActionUserPassword>()((set) => ({
    modal: false,
    setModal: (data) => set(() => ({ modal: data }))
}))


type TEmail = {
    email: string
}

type TActionEmail = {
    setEmail: (email: TEmail["email"]) => void
}


export const useEmailStore = create<TEmail & TActionEmail>()((set) => ({
    email: "",
    setEmail: (email) => set(() => ({ email: email }))
}))





