        document.getElementById('year').textContent = new Date().getFullYear();
        const appsData = [
            {
                id: 1,
                name: "Capcut ",
                badge: "Editor's Choice",
                desc: "Fitur:<br> Unlock No Ads Premium Features.",
                category: "Editor App",
                iconUrl: "https://ui-avatars.com/api/?name=iM&background=0D8ABC&color=fff&rounded=true&size=128", // Placeholder icon
                basicLink: "https://lynk.id/your_link_basic_1",
                vipLink: "https://t.me/your_telegram_1"
            },
            {
                id: 2,
                name: "FocusFlow",
                badge: "Productivity",
                desc: "Fitur: Pomodoro timer pintar untuk menjaga fokus kerjamu tetap maksimal.",
                category: "Tools",
                iconUrl: "https://ui-avatars.com/api/?name=FF&background=F59E0B&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_2",
                vipLink: "https://t.me/your_telegram_2"
            },
            {
                id: 3,
                name: "NoteSync",
                badge: "Top Rated",
                desc: "Fitur: Catatan digital tersinkronisasi di semua perangkat dengan dukungan Markdown.",
                category: "Tools",
                iconUrl: "https://ui-avatars.com/api/?name=NS&background=10B981&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_3",
                vipLink: "https://t.me/your_telegram_3"
            },
            {
                id: 4,
                name: "MindMap Pro",
                badge: "Creative",
                desc: "Fitur: Visualisasikan ide-ide kompleks dengan mind mapping berbasis AI.",
                category: "Tools",
                iconUrl: "https://ui-avatars.com/api/?name=MP&background=8B5CF6&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_4",
                vipLink: "https://t.me/your_telegram_4"
            },
            {
                id: 5,
                name: "FinTrack",
                badge: "Finance",
                desc: "Fitur: Pantau pengeluaran dan pemasukan bulanan untuk keuangan yang lebih sehat.",
                category: "Tools",
                iconUrl: "https://ui-avatars.com/api/?name=FT&background=EF4444&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_5",
                vipLink: "https://t.me/your_telegram_5"
            },
            {
                id: 6,
                name: "GameX",
                badge: "Game",
                desc: "Fitur: Game aksi seru dengan grafis HD dan multiplayer online.",
                category: "Game",
                iconUrl: "https://ui-avatars.com/api/?name=GX&background=FF6B6B&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_6",
                vipLink: "https://t.me/your_telegram_6"
            },
            {
                id: 7,
                name: "Puzzle Master",
                badge: "Game",
                desc: "Fitur: Game puzzle otak yang menantang untuk semua umur.",
                category: "Game",
                iconUrl: "https://ui-avatars.com/api/?name=PM&background=4ECDC4&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_7",
                vipLink: "https://t.me/your_telegram_7"
            }
            // Add here++
        ];
        //FUNGSI RENDER KARTU
        const sliderContainer = document.getElementById('app-slider');
        const filteredContainer = document.getElementById('filtered-slider');
        const filteredSection = document.getElementById('filtered-section');
        const filteredTitle = document.getElementById('filtered-title');
        const noResult = document.getElementById('no-result');

        function renderCards(data, container = sliderContainer) {
            container.innerHTML = ''; 

            if(container===filteredContainer) {
                if(data.length ===0) {
                    container.innerHTML = '<div class="text-center py-10 text-apple-muted"><i class="bx bx-folder-open text-4xl mb-2"></i><p>Tidak ada aplikasi di kategori ini.</p></div>';
                    return;
                }
            }else{
                if(data.length === 0) {
                    noResult.classList.remove('hidden');
                    container.classList.add('hidden');
                    return;
                }
                noResult.classList.add('hidden');
                container.classList.remove('hidden');
            }
            data.forEach(app => {
                //glass rounded design
                const cardHTML = `
                    <div class="snap-center shrink-0 w-[280px] sm:w-[320px] bg-white rounded-3xl p-6 shadow-ios border border-gray-100/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                        
                        <div>
                            <div class="flex items-center justify-between mb-4">
                                <img src="${app.iconUrl}" alt="${app.name} icon" class="w-16 h-16 rounded-2xl object-cover shadow-sm group-hover:scale-105 transition-transform duration-300">
                                <span class="px-3 py-1 bg-blue-50 text-apple-blue text-xs font-semibold rounded-full border border-blue-100">
                                    ${app.badge}
                                </span>
                            </div>
                            <h3 class="text-xl font-semibold text-apple-text mb-1">${app.name}</h3>
                            <p class="text-sm text-apple-muted line-clamp-2 h-10 mb-6">
                                ${app.desc}
                            </p>
                        </div>

                        <div class="flex flex-col gap-3">
                            <a href="${app.basicLink}" target="_blank" class="w-full text-center px-4 py-2.5 rounded-2xl text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300">
                                Coba Versi Basic
                            </a>
                            
                            <a href="${app.vipLink}" target="_blank" class="w-full text-center px-4 py-2.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-apple-blue hover:from-blue-600 hover:to-blue-700 shadow-sm transition-all duration-300 flex justify-center items-center gap-1.5">
                                <i class='bx bxs-crown text-base text-yellow-300'></i>
                                Dapatkan VIP (No Ads)
                            </a>
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', cardHTML);
            });
        }
        // Render awal saat halaman dimuat
        renderCards(appsData);
        // LOGIKA PENCARIAN
        function handleSearch(e) {
            const keyword = e.target.value.toLowerCase();
            const filteredData = appsData.filter(app => 
                app.name.toLowerCase().includes(keyword) || 
                app.desc.toLowerCase().includes(keyword) ||
                app.badge.toLowerCase().includes(keyword)
            );
            renderCards(filteredData);
            // Sinkronisasi input mobile & desktop
            document.getElementById('searchInputDesktop').value = keyword;
            document.getElementById('searchInputMobile').value = keyword;
            // Hide filtered section when searching
            filteredSection.classList.add('hidden');
        }

        document.getElementById('searchInputDesktop').addEventListener('input', handleSearch);
        document.getElementById('searchInputMobile').addEventListener('input', handleSearch);
        //LOGIKA SCROLL SLIDER
        const scrollAmount = 340; //perkiraan lebar kartu + gap
        
        function slideLeft() {
            sliderContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }

        function slideRight() {
            sliderContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
//SMOOTH SCROLL DARI HERO KE CATALOG
        function scrollToCatalog() {
            document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
        }
//LOGIKA KATEGORI MENU
        const categoryMenuBtn = document.getElementById('categoryMenuBtn');
        const categoryDropdown = document.getElementById('categoryDropdown');

        categoryMenuBtn.addEventListener('click', () => {
            const isHidden = categoryDropdown.classList.contains('hidden');
            if (isHidden) {
                categoryDropdown.classList.remove('hidden');
                setTimeout(() => {
                    categoryDropdown.classList.remove('opacity-0', 'translate-y-2');
                }, 10);
            } else {
                categoryDropdown.classList.add('opacity-0', 'translate-y-2');
                setTimeout(() => {
                    categoryDropdown.classList.add('hidden');
                }, 300);
            }
        });
// Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!categoryMenuBtn.contains(e.target) && !categoryDropdown.contains(e.target)) {
                categoryDropdown.classList.add('opacity-0', 'translate-y-2');
                setTimeout(() => {
                    categoryDropdown.classList.add('hidden');
                }, 300);
            }
        });
 // Handle category selection
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                filterByCategory(category);
                categoryDropdown.classList.add('opacity-0', 'translate-y-2');
                setTimeout(() => {
                    categoryDropdown.classList.add('hidden');
                }, 300);
            });
        });
        function filterByCategory(category) {
            let filteredData;
            if (category === 'Most Popular') {
                filteredData = appsData.filter(app => 
                    app.badge === "Editor's Choice" || app.badge === "Top Rated"
                );
            } else {
                filteredData = appsData.filter(app => app.category === category);
            }
            
            filteredTitle.textContent = `Kategori: ${category}`;
            renderCards(filteredData, filteredContainer);
            filteredSection.classList.remove('hidden');
            // Scroll to filtered section
            filteredSection.scrollIntoView({ behavior: 'smooth' });
        }

        function clearFilter() {
            filteredSection.classList.add('hidden');
            renderCards(appsData); // Reset to all apps
        }