import React from 'react'
import {Link} from 'react-router-dom';
import Styles from './Sidenav.module.css';

const Sidenav = () => {
  return (
    <nav className={`navbar navbar-expand d-flex flex-column align-items-start `}>
    <p className='navbar-brand' style={{borderBottom: '1px solid black'}}>Category</p>
    <ul className="navbar-nav d-flex flex-column ">
      <li className="nav-item">
        <Link to="/products/all-products" className="nav-link"><span>Shop All</span></Link>
      </li>
      <li className="nav-item">
        <Link to="/products/newArrival" className="nav-link"><span>New Arrivals</span></Link>
      </li>
      <li className="nav-item">
        <Link to="/products/bestseller" className="nav-link"><span>Bestsellers</span></Link>
      </li>
      <li className="nav-item dropdown">
        <Link to="" className="nav-link dropdown-toggle" id="navbarDropdown" role='button' data-bs-toggle='dropdown' aria-expanded='false'>Skin Care</Link>
        <ul className="dropdown-menu" aria-labelledby='navbarDropdown'>
          <li >
            <Link to="/products/skincare" className="dropdown-item" href="#">All Skincare Products</Link>
          </li>
          <li  >
            <Link to="/products/faceCream"  className="dropdown-item" href="#">Face Cream</Link>
          </li>
          <li  >
            <Link to="/products/facePack"  className="dropdown-item" href="#">Face Pack/Mask</Link>
          </li>
          <li  >
            <Link to="/products/faceSerum"  className="dropdown-item" href="#">Face Serum</Link>
          </li>
          <li  >
            <Link to="/products/faceScrub"  className="dropdown-item" href="#">Face Scrub</Link>
          </li>
          <li  >
            <Link to="/products/faceToner"  className="dropdown-item" href="#">Face Toner</Link>
          </li>
          <li  >
            <Link to="/products/faceGel"  className="dropdown-item" href="#">Face Gel</Link>
          </li>
          <li  >
            <Link to="/products/faceMoisturiser"  className="dropdown-item" href="#">Face Moisturisers</Link>
          </li>
          <li  >
            <Link to="/products/sunscreen"  className="dropdown-item" href="#">Sunscreen With SPF</Link>
          </li>
          <li  >
            <Link to="/products/lipcare"  className="dropdown-item" href="#">Lip Care</Link>
          </li>
          <li  >
            <Link to="/products/nightcare"  className="dropdown-item" href="#">Night Care</Link>
          </li>
          <li  >
            <Link to="/products/underEyeCare"  className="dropdown-item" href="#">Under Eye Care</Link>
          </li>
          <li  >
            <Link to="/products/eyebrow"  className="dropdown-item" href="#">Eye Brows</Link>
          </li>
          <li  >
            <Link to="/products/exfoliator"  className="dropdown-item" href="#">Exfoliators</Link>
          </li>
          <li  >
            <Link to="/products/faceWash"  className="dropdown-item" href="#">Face Wash</Link>
          </li>
          <li  >
            <Link to="/products/pigmentation"  className="dropdown-item" href="#">Pigmentation</Link>
          </li>
          <li  >
            <Link to="/products/ageing"  className="dropdown-item" href="#">Ageing</Link>
          </li>
          <li  >
            <Link to="/products/acne"  className="dropdown-item" href="#">Acne & Pimples</Link>
          </li>
          <li  >
            <Link to="/products/darkSpots"  className="dropdown-item" href="#">Dark Spots</Link>
          </li>
          <li  >
            <Link to="/products/darkCircles"  className="dropdown-item" href="#">Dark Circles</Link>
          </li>
          <li  >
            <Link to="/products/blackAndWhiteHeads"  className="dropdown-item" href="#">Blackheads & White Heads</Link>
          </li>
          <li  >
            <Link to="/products/dullSkin"  className="dropdown-item" href="#">Dull Skin</Link>
          </li>
          <li  >
            <Link to="/products/drySkin"  className="dropdown-item" href="#">Dry Skin</Link>
          </li>
          <li  >
            <Link to="/products/oilySkin"  className="dropdown-item" href="#">Oily Skin</Link>
          </li>
          <li  >
            <Link to="/products/normalSkin"  className="dropdown-item" href="#">Normal Skin</Link>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <Link to="" className="nav-link dropdown-toggle" id="navbarDropdown" role='button' data-bs-toggle='dropdown' aria-expanded='false'>Hair Care</Link>
        <ul className="dropdown-menu" aria-labelledby='navbarDropdown'>
          <li >
            <Link to="/products/haircare"  className="dropdown-item" href="#">All Haircare Products</Link>
          </li>
          <li  >
            <Link to="/products/shampoo"  className="dropdown-item" href="#">Shampoo</Link>
          </li>
          <li  >
            <Link to="/products/conditioner"  className="dropdown-item" href="#">Conditioner</Link>
          </li>
          <li  >
            <Link to="/products/hairOil"  className="dropdown-item" href="#">Hair Oil</Link>
          </li>
          <li  >
            <Link to="/products/hairMask"  className="dropdown-item" href="#">Hair Mask</Link>
          </li>
          <li  >
            <Link to="/products/hairLoss"  className="dropdown-item" href="#">Hair Loss</Link>
          </li>
          <li  >
            <Link to="/products/dullHair"  className="dropdown-item" href="#">Dull Hair</Link>
          </li>
          <li  >
            <Link to="/products/dandruff"  className="dropdown-item" href="#">Dandruff</Link>
          </li>
          <li  >
            <Link to="/products/damageHair"  className="dropdown-item" href="#">Damage Hair</Link>
          </li>
          <li  >
            <Link to="/products/frizzyHair"  className="dropdown-item" href="#">Frizzy Hair</Link>
          </li>
          <li  >
            <Link to="/products/dryHairAndScalp"  className="dropdown-item" href="#">Dry Hair & Scalp</Link>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <Link to="" className="nav-link dropdown-toggle" id="navbarDropdown" role='button' data-bs-toggle='dropdown' aria-expanded='false'>Body Care</Link>
        <ul className="dropdown-menu" aria-labelledby='navbarDropdown'>
          <li >
            <Link to="/products/bodycare" className="dropdown-item" href="#">All Body care Products</Link>
          </li>
          <li  >
            <Link to="/products/bodySoap"  className="dropdown-item" href="#">Body Soaps</Link>
          </li>
          <li  >
            <Link to="/products/bodyWash"  className="dropdown-item" href="#">Body Wash</Link>
          </li>
          <li  >
            <Link to="/products/bodyScrub"  className="dropdown-item" href="#">Body Scrub</Link>
          </li>
          <li  >
            <Link to="/products/bodyLotion"  className="dropdown-item" href="#">Body Lotion</Link>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <Link to="" className="nav-link dropdown-toggle" id="navbarDropdown" role='button' data-bs-toggle='dropdown' aria-expanded='false'>Perfumes</Link>
        <ul className="dropdown-menu" aria-labelledby='navbarDropdown'>
          <li >
            <Link to="/products/perfume"  className="dropdown-item" href="#">All Perfumes</Link>
          </li>
          <li  >
            <Link to="/products/women"  className="dropdown-item" href="#">Perfumes For Her</Link>
          </li>
          <li  >
            <Link to="/products/men"  className="dropdown-item" href="#">Perfumes For Him</Link>
          </li>
          <li  >
            <Link to="/products/unisex"  className="dropdown-item" href="#">Unisex Perfumes</Link>
          </li>
          <li  >
            <Link to="/products/bodyParfum"  className="dropdown-item" href="#">Body Parfum</Link>
          </li>
          <li  >
            <Link to="/products/luxury"  className="dropdown-item" href="#">Little Luxuries</Link>
          </li>
          <li  >
            <Link to="/products/gift"  className="dropdown-item" href="#">Gift Sets</Link>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <Link to="" className="nav-link dropdown-toggle" id="navbarDropdown" role='button' data-bs-toggle='dropdown' aria-expanded='false'>Combos</Link>
        <ul className="dropdown-menu" aria-labelledby='navbarDropdown'>
          <li >
            <Link to="" className="dropdown-item" href="#">All Combos</Link>
          </li>
          <li  >
            <Link to=""  className="dropdown-item" >Bestseller Combos</Link>
          </li>
          <li  >
            <Link to=""  className="dropdown-item" >Skin Combos</Link>
          </li>
          <li  >
            <Link to=""  className="dropdown-item" >Hair Combos</Link>
          </li>
          <li  >
            <Link to=""  className="dropdown-item" >Body Combos</Link>
          </li>
          <li  >
            <Link to=""  className="dropdown-item" >Perfume Combos</Link>
          </li>
          <li  >
            <Link to=""  className="dropdown-item" >C Glow Range</Link>
          </li>
          <li  >
            <Link to=""  className="dropdown-item" >Kumkumadi Range</Link>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <Link to="" className="nav-link"><span>Build a box</span></Link>
      </li>
    </ul>
  </nav>
  )
}

export default Sidenav
