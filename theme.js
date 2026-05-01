
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'], // Font mirip San Francisco
                    },
                    colors: {
                        apple: {
                            bg: '#F5F5F7',       // Background khas Apple
                            text: '#1D1D1F',     // Teks utama Apple
                            muted: '#414147',    // Teks sekunder
                            blue: '#85058a',     // Primary Button Apple
                            blueHover: '#5ceb09' // Hover Button
                        }
                    },
                    boxShadow: {
                        'ios': '0 4px 24px rgba(0, 0, 0, 0.04)', // Shadow super lembut
                    }
                }
            }
        }