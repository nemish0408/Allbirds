import React from 'react'
import Slider from '../../Components/slider/Slider'
import Layout from '../../Components/Layout/Layout'
import HomePageHero from '../../Components/HomePageHero/HomePageHero'
import LifestyleCollections from '../../Components/LifestyleCollections/LifestyleCollections'
import HomePageSale from '../../Components/HomePageSale/HomePageSale'
import BestSeller from '../../Components/BestSeller/BestSeller'
import MoreToShop from '../../Components/MoreToShop/MoreToShop'
import HomeInfo from '../../Components/HomeInfo/HomeInfo'

function Home() {
  return (
    <div>
      <Layout>
        <Slider></Slider>
        <HomePageHero></HomePageHero>
        <LifestyleCollections></LifestyleCollections>
        <HomePageSale></HomePageSale>
        <BestSeller></BestSeller>
        <MoreToShop></MoreToShop>
      </Layout>
    </div>
  )
}

export default Home