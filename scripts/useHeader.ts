// @ts-nocheck
import { useCallback, useMemo, useState } from "react";

declare const $: any;
let burgerIsOpen = false;

const useHeader = () => {
  const initVars = useCallback(() => {
    const $header = $(".bartlp--header");
    const $navbar = $(".bartlp--header-navbar");
    const $burgerMenu = $(".bartlp--header-navbar-right-menu");
    const $menuLinks = $("#bartlp--header-navbar-right-links");
    return { $header, $navbar, $burgerMenu, $menuLinks };
  }, []);

  const openResponsiveMenu = useCallback(() => {
    const { $header, $burgerMenu, $menuLinks, $navbar } = initVars();
    $burgerMenu.addClass("animate");
    const $newMenuLinks = $menuLinks.clone();
    $header.addClass("full");
    const menuResponsive = $(document.createElement("div"))
      .addClass("bartlp--header-navbar-right-menu-responsive-content")
      .append($newMenuLinks);
    $navbar.append(menuResponsive);
    setTimeout(() => {
      $newMenuLinks.addClass("animate");
    });
    listenMenuResponsive();
  }, []);

  const listenMenuResponsive = useCallback(() => {
    $(".bartlp--header-navbar-right-menu-responsive-content li").click(
      function () {
        const { $header } = initVars();
        const target = $(this).data("target");
        console.log($(`#${target}`).offset().top - $header.height());
        const top = $(`#${target}`).offset().top - $header.height();
        // @ts-ignore
        scrollTo({
          top,
          behavior: "smooth",
        });
      }
    );
  }, []);

  const closeResponsiveMenu = useCallback(() => {
    const { $header, $burgerMenu } = initVars();
    $burgerMenu.removeClass("animate");
    $header.removeClass("full");
    const $menuResponsive = $(
      ".bartlp--header-navbar-right-menu-responsive-content"
    );
    const $menuResponsiveLinks = $(
      ".bartlp--header-navbar-right-menu-responsive-content ul"
    );
    $menuResponsiveLinks.removeClass("animate");
    setTimeout(() => {
      $menuResponsive.remove();
    }, 500);
  }, []);

  const toogleBackGroundHeader = useCallback(() => {
    const { $header } = initVars();
    if ($(window).scrollTop() > 10) {
      $header.addClass("active");
    } else {
      $header.removeClass("active");
    }
  }, []);

  const init = useCallback(() => {
    $(window).on("scroll", () => {
      toogleBackGroundHeader();
    });
    toogleBackGroundHeader();
    const { $burgerMenu } = initVars();

    $burgerMenu.click(() => {
      burgerIsOpen = !burgerIsOpen;
      if (burgerIsOpen) {
        openResponsiveMenu();
      } else {
        closeResponsiveMenu();
      }
    });
  }, []);

  return init;
};

export default useHeader;
