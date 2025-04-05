<!DOCTYPE html>
<html lang="es" class="cguq1">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Chat | IRIS</title>
  <link href="./css/vendors/aos.css" rel="stylesheet" />
  <link href="./chat.css" rel="stylesheet" />
  <link rel="stylesheet" href="./output2.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js"></script>
  <script src="./js/vanta.js"></script>
</head>

<body class="cbyl4 ctwbb c8l5g csjju co5fe">
  <!-- Page wrapper -->
  <div class="overflow-hidden cuwej crocn cl8ef c4a2s">

    <!-- Site header -->
    <header class="cwa0a c07cc cr6bd cvyg4 cein3" data-aos="fade-down" data-aos-delay="350">
      <div class="cxbfd cx5hs cqcwp cn7jq">
        <div
          class="cdouf cnpw6 carbw cynyd cv5x1 cy259 ccd0d c2xfw c5j5d cnbst cpous cdrow czdar dark:czdar dark:backdrop-blur-[10px] dark:backdrop-saturate-[200%] dark:border-blue-700 ciff0 cwoyc c0vjw cnzyi c4a2s cpzr5 cblyd"
          id="navHead">
          <!-- Site branding -->
          <div class="cdrow cfxr2 c4a2s">
            <!-- Logo -->
            <a class="cdrak" id="logoHead" href="index.html" aria-label="Cruip">

              <svg version="1.0" class="cju07 block text-blue-900 dark:text-white" viewBox="0 0 61 28" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_3072_412)">
                  <path
                    d="M6.84824 1.44171C4.76987 5.73574 3.80344 7.68948 3.70991 7.75216C3.53325 7.85664 3.83461 8.14918 4.11519 8.14918C4.23989 8.14918 4.46851 8.0447 4.614 7.90888C4.76987 7.7835 5.52848 6.36261 6.38061 4.60739C7.21195 2.9253 7.92899 1.49395 7.99134 1.43127C8.06408 1.35813 8.62524 2.40291 9.74756 4.71186C11.3167 7.92977 11.3895 8.10739 11.2544 8.37903C10.8803 9.14171 11.2648 10.0193 12.0649 10.2387C12.4079 10.3328 12.543 10.3223 12.8547 10.1656C13.3535 9.9253 13.6341 9.50739 13.6653 9.01634C13.7068 8.41037 13.1769 7.7835 12.5741 7.71037C12.3455 7.67903 12.0857 7.21933 10.423 3.83425L8.53171 -7.71936e-05H8.03291H7.5341L6.84824 1.44171Z"
                    fill="#2256FF" />
                  <path
                    d="M0.519531 10.3955C0.519531 10.7089 0.581882 11.0642 0.644233 11.1791C0.727368 11.3149 3.2214 12.4328 7.84577 14.4283C11.7323 16.1 14.9746 17.5209 15.0473 17.5731C15.1408 17.6567 15.172 17.5313 15.172 17.0194C15.1616 16.4448 15.1304 16.3298 14.933 16.1836C14.8083 16.1 11.618 14.7 7.84577 13.0701C4.07353 11.4403 0.883245 10.0507 0.758543 9.96714C0.519531 9.82088 0.519531 9.82088 0.519531 10.3955Z"
                    fill="#2256FF" />
                  <path
                    d="M20.7316 13.0283C20.3367 14.1671 19.8691 15.5358 19.682 16.0581L19.3391 17.0298H20.0042H20.6693L20.8459 16.4238C21.1161 15.5358 21.0849 15.5567 22.28 15.588L23.3296 15.6193L23.579 16.3193L23.818 17.0298H24.4311C24.774 17.0298 25.0442 16.9984 25.0442 16.9462C25.0442 16.9044 24.587 15.5462 24.0362 13.9164L23.0178 10.9701H22.228H21.4383L20.7316 13.0283ZM22.6333 13.4149C22.8204 14.0104 22.9659 14.5328 22.9659 14.5641C22.9659 14.5955 22.6229 14.6268 22.1969 14.6268H21.4279L21.802 13.4775C22.0098 12.8402 22.2073 12.3283 22.2488 12.3283C22.28 12.3283 22.4567 12.8193 22.6333 13.4149Z"
                    fill="#2256FF" />
                  <path
                    d="M26.603 11.4925V12.0149H27.5383H28.4736V14.5223V17.0298H29.0451H29.6167V14.5223V12.0149H30.5519H31.4872V11.4925V10.9701H29.0451H26.603V11.4925Z"
                    fill="#2256FF" />
                  <path
                    d="M34.0852 13.9999V17.0298H36.0597H38.0341V16.5074V15.985H36.6312H35.2283V15.2537V14.5223H36.5273H37.8263V13.9999V13.4775H36.5273H35.2283V12.7462V12.0149H36.6312H38.0341V11.4925V10.9701H36.0597H34.0852V13.9999Z"
                    fill="#2256FF" />
                  <path
                    d="M40.8398 13.9999V17.0298H41.4114H41.9829V15.0865C41.9829 14.0208 42.0245 13.1746 42.0661 13.2059C42.1076 13.2268 42.7312 14.1044 43.4378 15.1387L44.7368 17.0298H45.2875H45.8279V13.9999V10.9701H45.2044H44.5809L44.5601 12.9238L44.5289 14.8775L43.1988 12.9238L41.8686 10.9701H41.349H40.8398V13.9999Z"
                    fill="#2256FF" />
                  <path
                    d="M48.5298 13.9999V17.0298H50.5562H52.5826V16.5074V15.985H51.1797H49.7768V15.2537V14.5223H51.0758H52.3748V13.9999V13.4775H51.0758H49.7768V12.7462V12.0149H51.1797H52.5826V11.4925V10.9701H50.5562H48.5298V13.9999Z"
                    fill="#2256FF" />
                  <path
                    d="M56.6562 12.1925C56.4172 12.8716 55.9496 14.2402 55.6067 15.2223L54.9832 17.0298H55.6378H56.3029L56.5419 16.3193L56.7913 15.6193L57.5707 15.588C58.8905 15.5358 58.9736 15.5671 59.2334 16.3507L59.462 17.0298H60.1271C60.522 17.0298 60.7818 16.988 60.7402 16.9358C60.6779 16.8208 59.0879 12.2238 58.8489 11.4611L58.693 10.9701H57.8929H57.0823L56.6562 12.1925ZM58.2358 13.2895C58.4021 13.8223 58.5579 14.3447 58.5787 14.4387C58.6307 14.6059 58.5475 14.6268 57.8513 14.6268H57.0719L57.446 13.4775C57.6539 12.8402 57.8513 12.3283 57.8825 12.3283C57.924 12.3283 58.0799 12.7671 58.2358 13.2895Z"
                    fill="#2256FF" />
                  <path
                    d="M3.35657 17.2387C2.9409 17.3328 2.73306 17.4895 2.52522 17.8969C2.09916 18.7432 2.66032 19.8507 3.53323 19.8507C3.72028 19.8507 4.04243 20.4357 5.62199 23.6641L7.48212 27.4775H8.03289H8.58366L9.30069 25.9835C9.69558 25.1686 10.5477 23.4029 11.192 22.0656C11.8363 20.7178 12.3351 19.579 12.3039 19.5268C12.2728 19.4746 12.0961 19.4328 11.8986 19.4328C11.6492 19.4328 11.4934 19.5059 11.3063 19.7253C11.1816 19.8925 10.3918 21.3969 9.56049 23.0686C8.72914 24.7507 8.03289 26.1193 8.00171 26.1193C7.97054 26.1089 7.22233 24.594 6.32863 22.7447C4.86338 19.7149 4.7179 19.3596 4.8426 19.1716C5.01926 18.9208 5.02965 18.2835 4.86338 17.9283C4.64515 17.4372 3.93851 17.1134 3.35657 17.2387Z"
                    fill="#2256FF" />
                </g>
                <defs>
                  <clipPath id="clip0_3072_412">
                    <rect width="61" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </a>
          </div>

          <!-- Desktop navigation -->
          <nav class="cbj0o cppca c9gtw">
            <!-- Desktop menu links -->
            <ul class="cxbhj cdrow c81cr ccywq cnrm4 cnss4 c4a2s c7fsb">
              <li class="cblyd c88zw">
                <a class="cgq07 ce0zw dark:text-blue-400 cdrow cwcpl c4a2s" href="pricing.html">Inicio</a>
              </li>
              <li class="cblyd c88zw">
                <a class="cgq07 ce0zw dark:text-blue-400 cdrow cwcpl c4a2s" href="documentation.html">Docs</a>
              </li>
              <!-- 1st level: hover -->
              <li class="cdrow c0vjw c3o7t c4a2s cblyd c88zw" x-data="{ open: false }" @mouseenter="open = true"
                @mouseleave="open = false">
                <span class="cgq07 cgfbk ce0zw dark:text-blue-400 cdrow cwcpl c4a2s" aria-haspopup="true"
                  :aria-expanded="open">Páginas</span>
                <button class="cfufg c2aj1" :aria-expanded="open" @click.prevent="open = !open">
                  <span class="c55m0">Show submenu for "Extra"</span>
                  <svg class="clcg2 dark:fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="10" height="6">
                    <path d="m1.06.19 3.5 3.5 3.5-3.5 1.061 1.06-4.56 4.56L0 1.25 1.06.19Z">
                    </path>
                  </svg>
                </button>
                <!-- 2nd level: hover -->
                <ul class="cy259 cm9sj c4vql chcxa cwoyc cxj2n cqzdr cgwj6 cynql c3ytk caqcf ckuz5" x-show="open"
                  x-transition:enter="cwcpl chyvu c3mi3" x-transition:enter-start="cio1t color"
                  x-transition:enter-end="c8bnb ch07w" x-transition:leave="cwcpl chyvu" x-transition:leave-start="c8bnb"
                  x-transition:leave-end="cio1t" x-cloak=""
                  @focusout="await $nextTick();!$el.contains($focus.focused()) &amp;&amp; (open = false)">
                  <li>
                    <a class="chpyv ce0zw cl954 cwmyr cnrm4 c4a2s cb51q" href="support.html">Lorem
                      ipsum</a>
                  </li>
                  <li>
                    <a class="chpyv ce0zw cl954 cwmyr cnrm4 c4a2s cb51q" href="apps.html">Lorem
                      ipsum</a>
                  </li>
                </ul>
              </li>
              <!-- 2nd level: hover -->
              <li class="cdrow c0vjw c3o7t c4a2s cblyd c88zw" x-data="{ open: false }" @mouseenter="open = true"
                @mouseleave="open = false">
                <span class="cgq07 cgfbk ce0zw dark:text-blue-400 cdrow cwcpl c4a2s" aria-haspopup="true"
                  :aria-expanded="open">Plataformas</span>
                <button class="cfufg c2aj1" :aria-expanded="open" @click.prevent="open = !open">
                  <span class="c55m0">Show submenu for "Extra"</span>
                  <svg class="clcg2 dark:fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="10" height="6">
                    <path d="m1.06.19 3.5 3.5 3.5-3.5 1.061 1.06-4.56 4.56L0 1.25 1.06.19Z">
                    </path>
                  </svg>
                </button>
                <!-- 2nd level: hover -->
                <ul class="cy259 cm9sj c4vql chcxa cwoyc cxj2n cqzdr cgwj6 cynql c3ytk caqcf ckuz5" x-show="open"
                  x-transition:enter="cwcpl chyvu c3mi3" x-transition:enter-start="cio1t color"
                  x-transition:enter-end="c8bnb ch07w" x-transition:leave="cwcpl chyvu" x-transition:leave-start="c8bnb"
                  x-transition:leave-end="cio1t" x-cloak=""
                  @focusout="await $nextTick();!$el.contains($focus.focused()) &amp;&amp; (open = false)">
                  <li>
                    <a class="chpyv ce0zw cl954 cwmyr cnrm4 c4a2s cb51q" href="support.html">Lorem
                      ipsum</a>
                  </li>
                  <li>
                    <a class="chpyv ce0zw cl954 cwmyr cnrm4 c4a2s cb51q" href="apps.html">Lorem
                      ipsum</a>
                  </li>
                </ul>
            </ul>
          </nav>

          <!-- Desktop sign in links -->
          <ul class="cdrow celda cfxr2 cnzyi c4a2s">
            <li>
              <a class="c2np1 c3ns1 cgwj6 c2htu cwq93" href="signin.html">Contactanos</a>
            </li>
            <li>
              <a class="cc3qo ctwfu cbzch c2htu cwq93 ckpqo1" href="signup.html">Iniciar sesión</a>
            </li>
          </ul>

          <!-- Dark mode toggle -->
          <svg type="button" data-animation="polygon" onclick=""
            class="theme-toggle cursor-pointer text-blue-900 dark:text-white hidden md:block dark:hidden w-8 h-8 c2aj1 ce0zw "
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="m15.844 3.344l-1.428.781l1.428.781l.781 1.428l.781-1.428l1.428-.781l-1.428-.781l-.781-1.428zm-5.432.814A8 8 0 1 0 18.93 16A9 9 0 0 1 10 7c0-.98.131-1.937.412-2.842M2 12C2 6.477 6.477 2 12 2h1.734l-.868 1.5C12.287 4.5 12 5.69 12 7a7 7 0 0 0 8.348 6.87l1.682-.327l-.543 1.626C20.162 19.137 16.417 22 12 22C6.477 22 2 17.523 2 12m18.5-5.584l.914 1.67l1.67.914l-1.67.914l-.914 1.67l-.914-1.67L17.916 9l1.67-.914z" />
          </svg>
          <!-- Light mode toggle -->
          <svg type="button" data-animation="polygon" onclick=""
            class="theme-toggle cursor-pointer text-blue-900 dark:text-white hidden sm:dark:hidden md:dark:block w-8 h-8 c2aj1 ce0zw "
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M10.999-.004h2.004V2h-2.004zM4.223 2.803L5.64 4.22L4.223 5.637L2.806 4.22zm15.556 0l1.417 1.417l-1.417 1.417l-1.417-1.417zM12 6a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0a8 8 0 0 1-16 0m-4.001-1.004h2.004V13H-.001zm22 0h2.004V13h-2.004zM4.223 18.36l1.417 1.417l-1.417 1.418l-1.417-1.418zm15.556 0l1.417 1.417l-1.417 1.417l-1.417-1.417zM11 21.997h2.004V24H11z" />
          </svg>

          <!-- Mobile menu -->
          <div class="cyv1b c4a2s" x-data="{ expanded: false }">
            <!-- Hamburger button -->
            <button class="cxbhj c3ns1 cdrow cdrak cczaz cwcpl codvp cbkjh cj90k" aria-controls="mobile-nav"
              :aria-expanded="expanded" @click.stop="expanded = !expanded">
              <span class="c55m0">Menu</span>
              <svg class="cc8v2 text-blue-900 dark:text-white ct7tn cdkxo" viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <rect class="cdgbu c2848 cd5ia ctqdg cqqni cawtk c54ql c7fcq coclo" y="7" width="9" height="2" rx="1">
                </rect>
                <rect class="cl4gy cllhq c54ql c7fcq coclo" y="7" width="16" height="2" rx="1"></rect>
                <rect class="cdgbu cggs3 ctqdg c1w3t c54ql c7fcq coclo" y="7" width="9" height="2" rx="1">
                </rect>
              </svg>
            </button>

            <!-- Mobile navigation -->
            <nav id="mobile-nav"
              class="csoaf cdouf cnpw6 carbw cynyd cv5x1 cy259 c2xfw cnbst cpous chcxa cwoyc cxj2n cqzdr cgwj6 cynql c07cc c3w9h"
              @click.outside="expanded = false" @keydown.escape.window="expanded = false" x-show="expanded"
              x-transition:enter="cwcpl chyvu ccybt c3mi3" x-transition:enter-start="cio1t color"
              x-transition:enter-end="c8bnb ch07w" x-transition:leave="cwcpl chyvu ccybt"
              x-transition:leave-start="c8bnb" x-transition:leave-end="cio1t" x-cloak="">
              <ul class="cnrm4 ckuz5">
                <li>
                  <a class="chpyv ce0zw cl954 cwmyr c4a2s cb51q" href="pricing.html">Inicio</a>
                </li>
                <li>
                  <a class="chpyv ce0zw cl954 cwmyr c4a2s cb51q" href="customers.html">Servicios</a>
                </li>
                <li>
                  <a class="chpyv ce0zw cl954 cwmyr c4a2s cb51q" href="blog.html">Plataformas</a>
                </li>
                <li>
                  <a class="chpyv ce0zw cl954 cwmyr c4a2s cb51q" href="documentation.html">Precios</a>
                </li>
                <li>
                  <a class="chpyv ce0zw cl954 cwmyr c4a2s cb51q" href="support.html">Promociones</a>
                </li>
                <!-- 1st level: hover -->
                <li class="cdrow c0vjw c3o7t c4a2s cb51q c88zw" x-data="{ open: false }" @click="open = !open">
                  <span class="cgq07 cgfbk ce0zw cdrow cwcpl c4a2s" aria-haspopup="true"
                    :aria-expanded="open">Más</span>
                  <button class="cfufg c2aj1" :aria-expanded="open" @click.prevent="open = !open">
                    <span class="c55m0">Show submenu for "Extra"</span>
                    <svg class="clcg2" xmlns="http://www.w3.org/2000/svg" width="10" height="6">
                      <path d="m1.06.19 3.5 3.5 3.5-3.5 1.061 1.06-4.56 4.56L0 1.25 1.06.19Z">
                      </path>
                    </svg>
                  </button>
                  <!-- 2nd level: hover -->
                  <ul class="cy259 cm9sj c4vql chcxa cwoyc cxj2n cqzdr cgwj6 cynql c3ytk caqcf ckuz5" x-show="open"
                    x-transition:enter="cwcpl chyvu c3mi3" x-transition:enter-start="cio1t color"
                    x-transition:enter-end="c8bnb ch07w" x-transition:leave="cwcpl chyvu"
                    x-transition:leave-start="c8bnb" x-transition:leave-end="cio1t" x-cloak=""
                    @focusout="await $nextTick();!$el.contains($focus.focused()) &amp;&amp; (open = false)">
                    <li>
                      <a class="chpyv ce0zw cl954 cwmyr cnrm4 c4a2s cb51q" href="support.html">Lorem
                        ipsum</a>
                    </li>
                    <li>
                      <a class="chpyv ce0zw cl954 cwmyr cnrm4 c4a2s cb51q" href="apps.html">Lorem
                        ipsum</a>
                    </li>
                  </ul>
                </li>
                <!-- Linea divisoria -->
                <li class="c3ytk c4vql c1et5 c3x1c c1et5 c3x1c c4vql c3ytk my-1"></li>
                <li>
                  <a type="button" data-animation="polygon"
                    class="theme-toggle chpyv ce0zw cl954 cwmyr c4a2s cb51q">Modo oscuro</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>


  </div>

</body>

<script src="./js/animation.js"></script>
<script src="./js/light-dark.js" type="module"></script>
<script src="./js/vendors/focus.min.js" defer=""></script>
<script src="./js/vendors/alphine-focus.min.js" defer=""></script>
<script src="./js/vendors/alpinejs.min.js" defer=""></script>
<script src="./js/vendors/aos.js"></script>
<script src="./js/main.js"></script>

</html>