import React from 'react'
import Haeder from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Section from '../components/Section/Section'
import MenuIdentetyCard from './identetyCard/MenuIdentetyCard/MenuIdentetyCard'
import MenuFingerPrint from './fingerprint/MenuFingerPrint/MenuFingerPrint'

export default function LayoutFingerPrint() {
    return (
        <div>
            <Haeder />
            <MenuFingerPrint />
            <Footer />
        </div>
    )
}
