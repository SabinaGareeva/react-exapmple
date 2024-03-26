"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import HeaderIcons from "./HeaderIcons";
import DropdownMenu from "../../dropdown-menus/DropdownMenu";
import css from "./Navigation.module.css";
import { useSession,signOut } from "next-auth/react";

/* пункты меню в шапке */
const navItems = [
  // { name: "Home", path: "/" },
  // { name: "Collection", path: "/Collection" },
  // { name: "New In", path: "/NewIn" },
  // { name: "Modiweek", path: "/Modiweek" },
  // { name: "Plus Size", path: "/Plussize" },
  // { name: "Sustainability", path: "/Sustainability" },
  { name: "Collection" },
  { name: "New In" },
  // { name: "Modiweek" },
  { name: "Plus Size" },
  { name: "Sustainability" },
];

const Navigation = () => {
 
  const buttonRef = useRef(null);
  // состояние (стейт) для активного пункта меню
  const [activeLink, setActiveLink] = useState("");
  //При клике на кнопку появляется dropdown menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();

  // клик по активному пункту меню
  const onClickHandler = (path) => {
    if (path !== activeLink) {
      router.push(path);
      setActiveLink(path);
    }
  };
  // Запоминание значения нажатой кнопки
  const [selectedItemName, setSelectedItemName] = useState("");
  const buttonsHeader = useRef(null);

  return (
    <header
      className="
     shadow bg-white h-110px  items-center flex-col 
    "
    >
      <div className={css.header__free_shopping}>
        <p className="text-[1.2rem] font-semibold">
          Enjoy Free Shopping On All Orders
        </p>
      </div>
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/" className={css.logo__link}>
            <svg
              width="184"
              height="46"
              viewBox="0 0 184 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.9486 12.48C36.9406 12.48 37.8153 12.688 38.5726 13.104C39.33 13.5093 39.922 14.1387 40.3486 14.992C40.786 15.8453 41.0046 16.944 41.0046 18.288V26H36.2206V19.024C36.2206 18.1067 36.082 17.3653 35.8046 16.8C35.5273 16.2347 34.978 15.952 34.1566 15.952C33.666 15.952 33.234 16.08 32.8606 16.336C32.4873 16.592 32.1993 16.9493 31.9966 17.408C31.794 17.856 31.6926 18.3947 31.6926 19.024V26H27.2286V19.024C27.2286 18.1067 27.074 17.3653 26.7646 16.8C26.466 16.2347 25.9326 15.952 25.1646 15.952C24.674 15.952 24.242 16.08 23.8686 16.336C23.4953 16.5813 23.2073 16.9333 23.0046 17.392C22.8126 17.84 22.7166 18.384 22.7166 19.024V26H17.8846V12.864H22.7166V14.736C22.8446 14.4053 23.122 14.0693 23.5486 13.728C23.986 13.376 24.5246 13.0827 25.1646 12.848C25.8046 12.6027 26.482 12.48 27.1966 12.48C27.9753 12.48 28.626 12.5973 29.1486 12.832C29.6713 13.056 30.098 13.36 30.4286 13.744C30.77 14.128 31.042 14.544 31.2446 14.992C31.394 14.608 31.6873 14.224 32.1246 13.84C32.5726 13.4453 33.1273 13.12 33.7886 12.864C34.4606 12.608 35.1806 12.48 35.9486 12.48ZM53.7101 26.384C52.2701 26.384 50.9901 26.0907 49.8701 25.504C48.7608 24.9067 47.8861 24.0907 47.2461 23.056C46.6168 22.0107 46.3021 20.816 46.3021 19.472C46.3021 18.128 46.6168 16.9333 47.2461 15.888C47.8861 14.832 48.7608 14 49.8701 13.392C50.9901 12.784 52.2701 12.48 53.7101 12.48C55.1501 12.48 56.4195 12.784 57.5181 13.392C58.6168 14 59.4755 14.832 60.0941 15.888C60.7128 16.9333 61.0221 18.128 61.0221 19.472C61.0221 20.816 60.7128 22.0107 60.0941 23.056C59.4755 24.0907 58.6168 24.9067 57.5181 25.504C56.4195 26.0907 55.1501 26.384 53.7101 26.384ZM53.7101 22.384C54.2648 22.384 54.7448 22.2613 55.1501 22.016C55.5555 21.7707 55.8701 21.424 56.0941 20.976C56.3181 20.528 56.4301 20.0213 56.4301 19.456C56.4301 18.88 56.3181 18.368 56.0941 17.92C55.8701 17.472 55.5555 17.12 55.1501 16.864C54.7448 16.608 54.2648 16.48 53.7101 16.48C53.1555 16.48 52.6701 16.608 52.2541 16.864C51.8488 17.12 51.5288 17.472 51.2941 17.92C51.0701 18.368 50.9581 18.88 50.9581 19.456C50.9581 20.0213 51.0701 20.528 51.2941 20.976C51.5288 21.424 51.8488 21.7707 52.2541 22.016C52.6701 22.2613 53.1555 22.384 53.7101 22.384ZM72.3854 26.384C71.116 26.384 70.012 26.0747 69.0734 25.456C68.1347 24.8267 67.404 23.9893 66.8814 22.944C66.3694 21.888 66.1134 20.72 66.1134 19.44C66.1134 18.16 66.3694 16.9973 66.8814 15.952C67.404 14.896 68.1347 14.0533 69.0734 13.424C70.012 12.7947 71.116 12.48 72.3854 12.48C73.228 12.48 73.9747 12.6133 74.6254 12.88C75.276 13.136 75.804 13.4453 76.2094 13.808C76.6147 14.16 76.86 14.4853 76.9454 14.784V3.984H81.8094V26H76.9934V23.872C76.7907 24.2667 76.46 24.6613 76.0014 25.056C75.5427 25.44 75.004 25.7547 74.3854 26C73.7667 26.256 73.1 26.384 72.3854 26.384ZM73.8734 22.56C74.46 22.56 74.9827 22.4267 75.4414 22.16C75.9107 21.8933 76.2787 21.5253 76.5454 21.056C76.812 20.576 76.9454 20.0373 76.9454 19.44C76.9454 18.8427 76.812 18.3093 76.5454 17.84C76.2787 17.36 75.9107 16.9867 75.4414 16.72C74.9827 16.4427 74.46 16.304 73.8734 16.304C73.308 16.304 72.796 16.4427 72.3374 16.72C71.8894 16.9867 71.532 17.36 71.2654 17.84C71.0094 18.3093 70.8814 18.8427 70.8814 19.44C70.8814 20.0373 71.0094 20.576 71.2654 21.056C71.532 21.5253 71.8894 21.8933 72.3374 22.16C72.796 22.4267 73.308 22.56 73.8734 22.56ZM87.9884 26V12.864H92.8524V26H87.9884ZM90.4844 10.16C89.7164 10.16 89.0657 9.89333 88.5324 9.36C87.999 8.816 87.7324 8.17067 87.7324 7.424C87.7324 6.67733 87.999 6.032 88.5324 5.488C89.0764 4.93333 89.727 4.656 90.4844 4.656C90.9857 4.656 91.4444 4.784 91.8604 5.04C92.2764 5.28533 92.6124 5.616 92.8684 6.032C93.1244 6.448 93.2524 6.912 93.2524 7.424C93.2524 8.17067 92.9804 8.816 92.4364 9.36C91.8924 9.89333 91.2417 10.16 90.4844 10.16ZM117.467 12.48C118.459 12.48 119.334 12.688 120.091 13.104C120.849 13.5093 121.441 14.1387 121.867 14.992C122.305 15.8453 122.523 16.944 122.523 18.288V26H117.739V19.024C117.739 18.1067 117.601 17.3653 117.323 16.8C117.046 16.2347 116.497 15.952 115.675 15.952C115.185 15.952 114.753 16.08 114.379 16.336C114.006 16.592 113.718 16.9493 113.515 17.408C113.313 17.856 113.211 18.3947 113.211 19.024V26H108.747V19.024C108.747 18.1067 108.593 17.3653 108.283 16.8C107.985 16.2347 107.451 15.952 106.683 15.952C106.193 15.952 105.761 16.08 105.387 16.336C105.014 16.5813 104.726 16.9333 104.523 17.392C104.331 17.84 104.235 18.384 104.235 19.024V26H99.4034V12.864H104.235V14.736C104.363 14.4053 104.641 14.0693 105.067 13.728C105.505 13.376 106.043 13.0827 106.683 12.848C107.323 12.6027 108.001 12.48 108.715 12.48C109.494 12.48 110.145 12.5973 110.667 12.832C111.19 13.056 111.617 13.36 111.947 13.744C112.289 14.128 112.561 14.544 112.763 14.992C112.913 14.608 113.206 14.224 113.643 13.84C114.091 13.4453 114.646 13.12 115.307 12.864C115.979 12.608 116.699 12.48 117.467 12.48ZM138.733 26V23.872C138.637 24.0853 138.392 24.3947 137.997 24.8C137.613 25.2053 137.101 25.5733 136.461 25.904C135.821 26.224 135.074 26.384 134.221 26.384C132.941 26.384 131.821 26.0747 130.861 25.456C129.901 24.8267 129.154 23.9893 128.621 22.944C128.088 21.888 127.821 20.72 127.821 19.44C127.821 18.16 128.088 16.9973 128.621 15.952C129.154 14.896 129.901 14.0533 130.861 13.424C131.821 12.7947 132.941 12.48 134.221 12.48C135.042 12.48 135.762 12.6133 136.381 12.88C137 13.136 137.501 13.4453 137.885 13.808C138.269 14.16 138.536 14.4853 138.685 14.784V12.864H143.517V26H138.733ZM132.589 19.44C132.589 20.0373 132.728 20.576 133.005 21.056C133.282 21.5253 133.65 21.8933 134.109 22.16C134.578 22.4267 135.096 22.56 135.661 22.56C136.248 22.56 136.765 22.4267 137.213 22.16C137.661 21.8933 138.013 21.5253 138.269 21.056C138.536 20.576 138.669 20.0373 138.669 19.44C138.669 18.8427 138.536 18.3093 138.269 17.84C138.013 17.36 137.661 16.9867 137.213 16.72C136.765 16.4427 136.248 16.304 135.661 16.304C135.096 16.304 134.578 16.4427 134.109 16.72C133.65 16.9867 133.282 17.36 133.005 17.84C132.728 18.3093 132.589 18.8427 132.589 19.44ZM154.667 26H149.787V3.984H154.667V26Z"
                fill="#404040"
              />
              <mask id="path-2-inside-1_3833_2223" fill="white">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M164.75 26C167.511 26 169.75 23.7614 169.75 21C169.75 18.2386 167.511 16 164.75 16C161.989 16 159.75 18.2386 159.75 21C159.75 23.2156 161.191 25.0947 163.187 25.7509C163.209 25.6708 163.232 25.5918 163.257 25.5139C162.676 24.8379 162.675 24.1806 162.675 23.8498L162.675 23.8495C162.678 22.9562 162.946 22.1361 163.631 21.5419C164.313 20.9503 165.388 20.5998 166.967 20.5998H168.36C168.43 20.5998 168.485 20.6558 168.485 20.7248V21.4193V21.4264L168.485 21.4264C168.397 22.9568 167.976 24.0325 167.284 24.7253C166.59 25.4194 165.642 25.7109 164.541 25.7109H163.494C163.483 25.7109 163.471 25.7092 163.459 25.7059C163.448 25.7446 163.437 25.7837 163.427 25.823C163.848 25.9384 164.292 26 164.75 26ZM163.951 24.6353C163.783 24.8874 163.647 25.1611 163.541 25.4551L163.547 25.4609H164.541C165.599 25.4609 166.474 25.1816 167.107 24.5486C167.74 23.9149 168.149 22.9084 168.235 21.4157V20.8498H166.967C165.42 20.8498 164.414 21.1938 163.795 21.7307C163.179 22.2649 162.927 23.0072 162.925 23.85V23.8508C162.925 24.1441 162.925 24.6737 163.356 25.2388C163.46 24.9766 163.588 24.7287 163.743 24.4966C164.148 23.8891 164.731 23.397 165.532 23.0412C165.595 23.0131 165.669 23.0415 165.697 23.1046C165.725 23.1677 165.697 23.2416 165.633 23.2696C164.872 23.6082 164.327 24.0709 163.951 24.6353Z"
                />
              </mask>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M164.75 26C167.511 26 169.75 23.7614 169.75 21C169.75 18.2386 167.511 16 164.75 16C161.989 16 159.75 18.2386 159.75 21C159.75 23.2156 161.191 25.0947 163.187 25.7509C163.209 25.6708 163.232 25.5918 163.257 25.5139C162.676 24.8379 162.675 24.1806 162.675 23.8498L162.675 23.8495C162.678 22.9562 162.946 22.1361 163.631 21.5419C164.313 20.9503 165.388 20.5998 166.967 20.5998H168.36C168.43 20.5998 168.485 20.6558 168.485 20.7248V21.4193V21.4264L168.485 21.4264C168.397 22.9568 167.976 24.0325 167.284 24.7253C166.59 25.4194 165.642 25.7109 164.541 25.7109H163.494C163.483 25.7109 163.471 25.7092 163.459 25.7059C163.448 25.7446 163.437 25.7837 163.427 25.823C163.848 25.9384 164.292 26 164.75 26ZM163.951 24.6353C163.783 24.8874 163.647 25.1611 163.541 25.4551L163.547 25.4609H164.541C165.599 25.4609 166.474 25.1816 167.107 24.5486C167.74 23.9149 168.149 22.9084 168.235 21.4157V20.8498H166.967C165.42 20.8498 164.414 21.1938 163.795 21.7307C163.179 22.2649 162.927 23.0072 162.925 23.85V23.8508C162.925 24.1441 162.925 24.6737 163.356 25.2388C163.46 24.9766 163.588 24.7287 163.743 24.4966C164.148 23.8891 164.731 23.397 165.532 23.0412C165.595 23.0131 165.669 23.0415 165.697 23.1046C165.725 23.1677 165.697 23.2416 165.633 23.2696C164.872 23.6082 164.327 24.0709 163.951 24.6353Z"
                fill="#748C70"
              />
              <path
                d="M163.187 25.7509L163.109 25.9884L163.36 26.071L163.429 25.8156L163.187 25.7509ZM163.257 25.5139L163.495 25.5908L163.538 25.4572L163.447 25.3508L163.257 25.5139ZM162.675 23.8498L162.425 23.8495V23.8498H162.675ZM162.675 23.8495L162.425 23.8488L162.425 23.8491L162.675 23.8495ZM163.631 21.5419L163.795 21.7307L163.631 21.5419ZM168.485 21.4264L168.472 21.6761L168.735 21.6907V21.4264H168.485ZM168.485 21.4264L168.499 21.1768L168.25 21.163L168.236 21.4121L168.485 21.4264ZM167.284 24.7253L167.46 24.9021L167.284 24.7253ZM163.459 25.7059L163.53 25.466L163.29 25.3959L163.22 25.6354L163.459 25.7059ZM163.427 25.823L163.185 25.7587L163.121 25.9986L163.361 26.0641L163.427 25.823ZM163.541 25.4551L163.306 25.3703L163.253 25.5164L163.361 25.6283L163.541 25.4551ZM163.951 24.6353L163.743 24.4966L163.951 24.6353ZM163.547 25.4609L163.367 25.6342L163.44 25.7109H163.547V25.4609ZM167.107 24.5486L167.284 24.7253H167.284L167.107 24.5486ZM168.235 21.4157L168.485 21.4301L168.485 21.4229V21.4157H168.235ZM168.235 20.8498H168.485V20.5998H168.235V20.8498ZM163.795 21.7307L163.631 21.5419H163.631L163.795 21.7307ZM162.925 23.85L162.675 23.8493V23.85H162.925ZM162.925 23.8508L163.175 23.8508V23.8508H162.925ZM163.356 25.2388L163.157 25.3904L163.425 25.7421L163.588 25.331L163.356 25.2388ZM163.743 24.4966L163.535 24.358H163.535L163.743 24.4966ZM165.532 23.0412L165.633 23.2696H165.633L165.532 23.0412ZM165.633 23.2696L165.532 23.0412L165.633 23.2696ZM169.5 21C169.5 23.6234 167.373 25.75 164.75 25.75V26.25C167.649 26.25 170 23.8995 170 21H169.5ZM164.75 16.25C167.373 16.25 169.5 18.3766 169.5 21H170C170 18.1005 167.649 15.75 164.75 15.75V16.25ZM160 21C160 18.3766 162.127 16.25 164.75 16.25V15.75C161.851 15.75 159.5 18.1005 159.5 21H160ZM163.265 25.5134C161.369 24.8899 160 23.1045 160 21H159.5C159.5 23.3268 161.013 25.2994 163.109 25.9884L163.265 25.5134ZM163.429 25.8156C163.449 25.7395 163.471 25.6645 163.495 25.5908L163.019 25.437C162.993 25.519 162.968 25.6021 162.946 25.6862L163.429 25.8156ZM163.447 25.3508C162.926 24.7453 162.925 24.1653 162.925 23.8498H162.425C162.425 24.1959 162.425 24.9306 163.068 25.6769L163.447 25.3508ZM162.925 23.8502L162.925 23.8498L162.425 23.8491L162.425 23.8495L162.925 23.8502ZM162.925 23.8502C162.927 23.0073 163.179 22.2649 163.795 21.7307L163.468 21.353C162.714 22.0072 162.428 22.9051 162.425 23.8488L162.925 23.8502ZM163.795 21.7307C164.414 21.1938 165.42 20.8498 166.967 20.8498V20.3498C165.356 20.3498 164.212 20.7068 163.468 21.353L163.795 21.7307ZM166.967 20.8498H168.36V20.3498H166.967V20.8498ZM168.36 20.8498C168.291 20.8498 168.235 20.7939 168.235 20.7248H168.735C168.735 20.5177 168.568 20.3498 168.36 20.3498V20.8498ZM168.235 20.7248V21.4193H168.735V20.7248H168.235ZM168.235 21.4193V21.4264H168.735V21.4193H168.235ZM168.499 21.1768L168.499 21.1768L168.471 21.676L168.472 21.6761L168.499 21.1768ZM168.236 21.4121C168.15 22.9068 167.741 23.9144 167.107 24.5486L167.46 24.9021C168.212 24.1507 168.645 23.0068 168.735 21.4408L168.236 21.4121ZM167.107 24.5486C166.474 25.1816 165.599 25.4609 164.541 25.4609V25.9609C165.685 25.9609 166.706 25.6571 167.46 24.9021L167.107 24.5486ZM164.541 25.4609H163.494V25.9609H164.541V25.4609ZM163.494 25.4609C163.506 25.4609 163.518 25.4627 163.53 25.466L163.389 25.9459C163.423 25.9558 163.459 25.9609 163.494 25.9609V25.4609ZM163.22 25.6354C163.208 25.6762 163.196 25.7173 163.185 25.7587L163.668 25.8873C163.678 25.85 163.688 25.813 163.699 25.7765L163.22 25.6354ZM164.75 25.75C164.314 25.75 163.893 25.6914 163.493 25.5819L163.361 26.0641C163.803 26.1853 164.269 26.25 164.75 26.25V25.75ZM163.776 25.5398C163.876 25.2633 164.003 25.0079 164.159 24.774L163.743 24.4966C163.562 24.7669 163.418 25.0589 163.306 25.3703L163.776 25.5398ZM163.727 25.2877L163.722 25.2818L163.361 25.6283L163.367 25.6342L163.727 25.2877ZM164.541 25.2109H163.547V25.7109H164.541V25.2109ZM166.93 24.3719C166.358 24.9439 165.556 25.2109 164.541 25.2109V25.7109C165.642 25.7109 166.59 25.4194 167.284 24.7253L166.93 24.3719ZM167.986 21.4013C167.902 22.8582 167.505 23.7966 166.93 24.3719L167.284 24.7253C167.976 24.0331 168.397 22.9585 168.485 21.4301L167.986 21.4013ZM167.985 20.8498V21.4157H168.485V20.8498H167.985ZM166.967 21.0998H168.235V20.5998H166.967V21.0998ZM163.959 21.9196C164.515 21.4372 165.452 21.0998 166.967 21.0998V20.5998C165.388 20.5998 164.313 20.9503 163.631 21.5419L163.959 21.9196ZM163.175 23.8507C163.177 23.0585 163.412 22.3939 163.959 21.9196L163.631 21.5419C162.947 22.136 162.678 22.956 162.675 23.8493L163.175 23.8507ZM163.175 23.8508V23.85H162.675V23.8508H163.175ZM163.555 25.0873C163.176 24.5904 163.175 24.1318 163.175 23.8508L162.675 23.8508C162.675 24.1564 162.674 24.757 163.157 25.3904L163.555 25.0873ZM163.535 24.358C163.369 24.6056 163.234 24.8692 163.123 25.1467L163.588 25.331C163.686 25.084 163.806 24.8518 163.951 24.6353L163.535 24.358ZM165.43 22.8127C164.591 23.1859 163.968 23.7073 163.535 24.358L163.951 24.6353C164.327 24.0709 164.872 23.6082 165.633 23.2696L165.43 22.8127ZM165.925 23.0031C165.841 22.8138 165.62 22.7286 165.43 22.8127L165.633 23.2696C165.57 23.2976 165.496 23.2692 165.468 23.2061L165.925 23.0031ZM165.735 23.4981C165.924 23.4139 166.009 23.1923 165.925 23.0031L165.468 23.2061C165.44 23.1431 165.469 23.0692 165.532 23.0412L165.735 23.4981ZM164.159 24.774C164.506 24.2528 165.012 23.8193 165.735 23.4981L165.532 23.0412C164.731 23.397 164.148 23.8891 163.743 24.4966L164.159 24.774Z"
                fill="white"
                mask="url(#path-2-inside-1_3833_2223)"
              />
              <path
                d="M56.6695 37.925L55.6245 41H54.7245L53.6095 36.895H54.5345L55.2795 40.05L56.3095 36.975H57.0295L58.0495 40.05L58.7995 36.895H59.7295L58.6145 41H57.7145L56.6695 37.925ZM63.4855 41.12C63.0622 41.12 62.6855 41.025 62.3555 40.835C62.0289 40.645 61.7722 40.3883 61.5855 40.065C61.3989 39.7383 61.3055 39.37 61.3055 38.96C61.3055 38.55 61.3989 38.18 61.5855 37.85C61.7722 37.52 62.0289 37.2583 62.3555 37.065C62.6855 36.8717 63.0622 36.775 63.4855 36.775C63.9055 36.775 64.2772 36.8717 64.6005 37.065C64.9272 37.2583 65.1822 37.52 65.3655 37.85C65.5489 38.18 65.6405 38.55 65.6405 38.96C65.6405 39.37 65.5489 39.7383 65.3655 40.065C65.1822 40.3883 64.9272 40.645 64.6005 40.835C64.2772 41.025 63.9055 41.12 63.4855 41.12ZM63.4855 40.375C63.7522 40.375 63.9839 40.3133 64.1805 40.19C64.3805 40.0667 64.5355 39.8983 64.6455 39.685C64.7555 39.4683 64.8105 39.225 64.8105 38.955C64.8105 38.685 64.7555 38.4417 64.6455 38.225C64.5355 38.0083 64.3805 37.8367 64.1805 37.71C63.9839 37.5833 63.7522 37.52 63.4855 37.52C63.2155 37.52 62.9805 37.5833 62.7805 37.71C62.5805 37.8367 62.4239 38.0083 62.3105 38.225C62.2005 38.4417 62.1455 38.685 62.1455 38.955C62.1455 39.225 62.2005 39.4683 62.3105 39.685C62.4239 39.8983 62.5805 40.0667 62.7805 40.19C62.9805 40.3133 63.2155 40.375 63.4855 40.375ZM72.5301 36.775C72.8334 36.775 73.0934 36.8417 73.3101 36.975C73.5267 37.105 73.6917 37.305 73.8051 37.575C73.9217 37.845 73.9801 38.19 73.9801 38.61V41H73.1201V38.785C73.1201 38.3417 73.0584 38.0083 72.9351 37.785C72.8117 37.5617 72.5867 37.45 72.2601 37.45C72.0867 37.45 71.9201 37.4983 71.7601 37.595C71.6034 37.6883 71.4734 37.8333 71.3701 38.03C71.2701 38.2267 71.2201 38.4783 71.2201 38.785V41H70.4101V38.785C70.4101 38.3417 70.3334 38.0083 70.1801 37.785C70.0267 37.5617 69.8117 37.45 69.5351 37.45C69.3584 37.45 69.1917 37.4967 69.0351 37.59C68.8817 37.68 68.7567 37.8233 68.6601 38.02C68.5634 38.2167 68.5151 38.4717 68.5151 38.785V41H67.6501V36.895H68.5151V37.525C68.5517 37.4217 68.6301 37.3117 68.7501 37.195C68.8734 37.0783 69.0301 36.98 69.2201 36.9C69.4134 36.8167 69.6284 36.775 69.8651 36.775C70.1117 36.775 70.3184 36.825 70.4851 36.925C70.6517 37.025 70.7834 37.1483 70.8801 37.295C70.9767 37.4383 71.0434 37.5767 71.0801 37.71C71.1267 37.5667 71.2167 37.4233 71.3501 37.28C71.4834 37.1333 71.6517 37.0133 71.8551 36.92C72.0584 36.8233 72.2834 36.775 72.5301 36.775ZM76.7282 39.125C76.7315 39.3717 76.7849 39.5967 76.8882 39.8C76.9915 40.0033 77.1449 40.165 77.3482 40.285C77.5549 40.405 77.8082 40.465 78.1082 40.465C78.3615 40.465 78.5765 40.4283 78.7532 40.355C78.9332 40.2783 79.0799 40.1883 79.1932 40.085C79.3065 39.9783 79.3882 39.8833 79.4382 39.8L79.8632 40.325C79.7532 40.485 79.6182 40.625 79.4582 40.745C79.3015 40.865 79.1099 40.9567 78.8832 41.02C78.6565 41.0867 78.3799 41.12 78.0532 41.12C77.6132 41.12 77.2315 41.0267 76.9082 40.84C76.5882 40.65 76.3415 40.3883 76.1682 40.055C75.9949 39.7183 75.9082 39.3333 75.9082 38.9C75.9082 38.5 75.9899 38.14 76.1532 37.82C76.3165 37.4967 76.5532 37.2417 76.8632 37.055C77.1765 36.8683 77.5532 36.775 77.9932 36.775C78.3965 36.775 78.7465 36.86 79.0432 37.03C79.3432 37.1967 79.5749 37.4333 79.7382 37.74C79.9049 38.0467 79.9882 38.4133 79.9882 38.84C79.9882 38.8667 79.9865 38.915 79.9832 38.985C79.9799 39.0517 79.9765 39.0983 79.9732 39.125H76.7282ZM79.1582 38.47C79.1549 38.3333 79.1149 38.1833 79.0382 38.02C78.9649 37.8567 78.8449 37.7167 78.6782 37.6C78.5115 37.4833 78.2865 37.425 78.0032 37.425C77.7099 37.425 77.4732 37.4817 77.2932 37.595C77.1165 37.7083 76.9865 37.8467 76.9032 38.01C76.8199 38.17 76.7715 38.3233 76.7582 38.47H79.1582ZM84.2438 36.775C84.5138 36.775 84.7755 36.8317 85.0288 36.945C85.2855 37.0583 85.4955 37.2383 85.6588 37.485C85.8255 37.7283 85.9088 38.0467 85.9088 38.44V41H85.0288V38.61C85.0288 38.2033 84.9338 37.9083 84.7438 37.725C84.5538 37.5383 84.3088 37.445 84.0088 37.445C83.8122 37.445 83.6222 37.5017 83.4388 37.615C83.2588 37.725 83.1105 37.8783 82.9938 38.075C82.8772 38.2683 82.8188 38.4883 82.8188 38.735V41H81.9488V36.895H82.8188V37.625C82.8488 37.5117 82.9305 37.3883 83.0638 37.255C83.1972 37.1217 83.3672 37.0083 83.5738 36.915C83.7805 36.8217 84.0038 36.775 84.2438 36.775ZM93.4717 40.4C93.7317 40.4 93.9417 40.3583 94.1017 40.275C94.2617 40.1917 94.3617 40.1317 94.4017 40.095L94.8267 40.72C94.7934 40.75 94.7134 40.7983 94.5867 40.865C94.4634 40.9283 94.3034 40.9867 94.1067 41.04C93.9134 41.0933 93.6934 41.12 93.4467 41.12C93.0701 41.12 92.7201 41.0367 92.3967 40.87C92.0734 40.7 91.8117 40.4533 91.6117 40.13C91.4151 39.8067 91.3167 39.4117 91.3167 38.945C91.3167 38.475 91.4151 38.08 91.6117 37.76C91.8117 37.4367 92.0734 37.1917 92.3967 37.025C92.7201 36.8583 93.0701 36.775 93.4467 36.775C93.6901 36.775 93.9067 36.805 94.0967 36.865C94.2867 36.9217 94.4434 36.985 94.5667 37.055C94.6901 37.125 94.7717 37.1783 94.8117 37.215L94.3817 37.84C94.3551 37.8133 94.3034 37.7733 94.2267 37.72C94.1534 37.6633 94.0534 37.6117 93.9267 37.565C93.8001 37.5183 93.6484 37.495 93.4717 37.495C93.2584 37.495 93.0501 37.5533 92.8467 37.67C92.6467 37.7833 92.4817 37.9483 92.3517 38.165C92.2217 38.3817 92.1567 38.6417 92.1567 38.945C92.1567 39.2483 92.2217 39.51 92.3517 39.73C92.4817 39.9467 92.6467 40.1133 92.8467 40.23C93.0501 40.3433 93.2584 40.4 93.4717 40.4ZM97.5921 41H96.7171V34.12H97.5921V41ZM101.745 41.12C101.322 41.12 100.945 41.025 100.615 40.835C100.289 40.645 100.032 40.3883 99.8453 40.065C99.6586 39.7383 99.5653 39.37 99.5653 38.96C99.5653 38.55 99.6586 38.18 99.8453 37.85C100.032 37.52 100.289 37.2583 100.615 37.065C100.945 36.8717 101.322 36.775 101.745 36.775C102.165 36.775 102.537 36.8717 102.86 37.065C103.187 37.2583 103.442 37.52 103.625 37.85C103.809 38.18 103.9 38.55 103.9 38.96C103.9 39.37 103.809 39.7383 103.625 40.065C103.442 40.3883 103.187 40.645 102.86 40.835C102.537 41.025 102.165 41.12 101.745 41.12ZM101.745 40.375C102.012 40.375 102.244 40.3133 102.44 40.19C102.64 40.0667 102.795 39.8983 102.905 39.685C103.015 39.4683 103.07 39.225 103.07 38.955C103.07 38.685 103.015 38.4417 102.905 38.225C102.795 38.0083 102.64 37.8367 102.44 37.71C102.244 37.5833 102.012 37.52 101.745 37.52C101.475 37.52 101.24 37.5833 101.04 37.71C100.84 37.8367 100.684 38.0083 100.57 38.225C100.46 38.4417 100.405 38.685 100.405 38.955C100.405 39.225 100.46 39.4683 100.57 39.685C100.684 39.8983 100.84 40.0667 101.04 40.19C101.24 40.3133 101.475 40.375 101.745 40.375ZM105.515 36.895H106.32V35.21H107.185V36.895H108.24V37.64H107.185V39.67C107.185 39.91 107.227 40.0867 107.31 40.2C107.397 40.3133 107.512 40.37 107.655 40.37C107.782 40.37 107.88 40.3467 107.95 40.3C108.02 40.2533 108.062 40.2217 108.075 40.205L108.42 40.845C108.4 40.8617 108.347 40.8933 108.26 40.94C108.173 40.9867 108.062 41.0283 107.925 41.065C107.788 41.1017 107.628 41.12 107.445 41.12C107.125 41.12 106.857 41.0233 106.64 40.83C106.427 40.6333 106.32 40.3233 106.32 39.9V37.64H105.515V36.895ZM112.5 36.775C112.77 36.775 113.032 36.8317 113.285 36.945C113.542 37.0583 113.752 37.2383 113.915 37.485C114.082 37.7283 114.165 38.0467 114.165 38.44V41H113.285V38.61C113.285 38.2033 113.192 37.9083 113.005 37.725C112.822 37.5383 112.58 37.445 112.28 37.445C112.08 37.445 111.889 37.5017 111.705 37.615C111.522 37.725 111.37 37.8783 111.25 38.075C111.134 38.2683 111.075 38.4883 111.075 38.735V41H110.195V34.12H111.075V37.625C111.105 37.5117 111.185 37.3883 111.315 37.255C111.449 37.1217 111.619 37.0083 111.825 36.915C112.032 36.8217 112.257 36.775 112.5 36.775ZM116.436 41V36.895H117.306V41H116.436ZM116.881 35.49C116.725 35.49 116.59 35.435 116.476 35.325C116.366 35.2117 116.311 35.0767 116.311 34.92C116.311 34.7633 116.366 34.6283 116.476 34.515C116.59 34.4017 116.725 34.345 116.881 34.345C116.985 34.345 117.08 34.3717 117.166 34.425C117.256 34.4783 117.328 34.5483 117.381 34.635C117.435 34.7183 117.461 34.8133 117.461 34.92C117.461 35.0767 117.405 35.2117 117.291 35.325C117.178 35.435 117.041 35.49 116.881 35.49ZM121.931 36.775C122.201 36.775 122.463 36.8317 122.716 36.945C122.973 37.0583 123.183 37.2383 123.346 37.485C123.513 37.7283 123.596 38.0467 123.596 38.44V41H122.716V38.61C122.716 38.2033 122.621 37.9083 122.431 37.725C122.241 37.5383 121.996 37.445 121.696 37.445C121.5 37.445 121.31 37.5017 121.126 37.615C120.946 37.725 120.798 37.8783 120.681 38.075C120.565 38.2683 120.506 38.4883 120.506 38.735V41H119.636V36.895H120.506V37.625C120.536 37.5117 120.618 37.3883 120.751 37.255C120.885 37.1217 121.055 37.0083 121.261 36.915C121.468 36.8217 121.691 36.775 121.931 36.775ZM127.694 43.195C127.371 43.195 127.077 43.1617 126.814 43.095C126.554 43.0283 126.326 42.9333 126.129 42.81C125.936 42.69 125.781 42.5483 125.664 42.385L126.234 41.84C126.297 41.9267 126.382 42.0183 126.489 42.115C126.599 42.215 126.747 42.3 126.934 42.37C127.121 42.44 127.364 42.475 127.664 42.475C127.957 42.475 128.206 42.4117 128.409 42.285C128.612 42.1617 128.767 41.9933 128.874 41.78C128.981 41.5667 129.034 41.3267 129.034 41.06V40.925H129.884V41.115C129.884 41.5683 129.786 41.9483 129.589 42.255C129.396 42.565 129.134 42.7983 128.804 42.955C128.474 43.115 128.104 43.195 127.694 43.195ZM129.034 41V40.2C129.007 40.2833 128.929 40.3983 128.799 40.545C128.672 40.6917 128.497 40.825 128.274 40.945C128.054 41.0617 127.794 41.12 127.494 41.12C127.114 41.12 126.769 41.03 126.459 40.85C126.152 40.67 125.907 40.4183 125.724 40.095C125.544 39.7683 125.454 39.3867 125.454 38.95C125.454 38.5133 125.544 38.1333 125.724 37.81C125.907 37.4833 126.152 37.23 126.459 37.05C126.769 36.8667 127.114 36.775 127.494 36.775C127.791 36.775 128.047 36.8283 128.264 36.935C128.484 37.0417 128.659 37.165 128.789 37.305C128.922 37.445 129.001 37.565 129.024 37.665V36.895H129.884V41H129.034ZM126.314 38.95C126.314 39.2467 126.379 39.5033 126.509 39.72C126.639 39.9367 126.807 40.105 127.014 40.225C127.224 40.3417 127.447 40.4 127.684 40.4C127.937 40.4 128.164 40.34 128.364 40.22C128.564 40.1 128.722 39.9317 128.839 39.715C128.956 39.495 129.014 39.24 129.014 38.95C129.014 38.66 128.956 38.4067 128.839 38.19C128.722 37.97 128.564 37.8 128.364 37.68C128.164 37.5567 127.937 37.495 127.684 37.495C127.447 37.495 127.224 37.555 127.014 37.675C126.807 37.795 126.639 37.9633 126.509 38.18C126.379 38.3967 126.314 38.6533 126.314 38.95Z"
                fill="#404040"
              />
            </svg>
          </Link>
      
          <nav className="inline-flex items-center gap-10" ref={buttonsHeader}>
            {navItems.map((item, index) => (
              <button
                ref={buttonRef}
                // href={item.path}
                // onClick={() => onClickHandler(item.path)}
                // className={`header-links  ${
                //   item.path === router.pathname ? "text-sky-500" : ""
                // }`}
                className={css.header__button}
                onClick={() => {
                  setIsOpen(!isOpen);
                  setSelectedItemName(item.name);
                }}
                key={index}
              >
                {item.name}
              </button>
            ))}
            <Link href="/Modiweek" className={css.header__links}>
              Modiweek
            </Link>
          
          </nav>
          <HeaderIcons onClickHandler={onClickHandler}></HeaderIcons>
          {/* {session.data && (<Link href='#'>Profile</Link>)}
          {session.data ? <Link href='#' onClick={()=>signOut({callbackUrl:'/'})}>Sign Out</Link>:<Link href="/LogIn">Sign in</Link>} */}
        </div>
      </div>
      <DropdownMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        buttonsHeader={buttonsHeader}
        itemName={selectedItemName}
        headerLinkClass="header-button"
      ></DropdownMenu>
    </header>
  );
};

export default Navigation;
