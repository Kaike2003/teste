import React from 'react'
import Haeder from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Section from '../components/Section/Section'
import MenuIdentetyCard from './identetyCard/MenuIdentetyCard/MenuIdentetyCard'

export default function LayoutIdentetyCard() {
    return (
        <div>
            <Haeder />
            <MenuIdentetyCard />
            <Footer />
        </div>
    )
}
