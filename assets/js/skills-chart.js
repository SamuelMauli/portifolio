document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;

    const createChart = () => {
        const ctx = document.getElementById('skillsRadar');
        if (!ctx) return;

        const chartData = {
            labels: [
                'Frontend',
                'Backend',
                'AI/ML & Data',
                'DevOps & Tools',
                'Resolução de Problemas',
                'Engenharia de Software'
            ],
            datasets: [{
                label: 'Proficiência',
                data: [80, 90, 85, 70, 85, 78], // Valores baseados nas suas skills
                backgroundColor: 'rgba(0, 212, 255, 0.2)',
                borderColor: 'rgba(0, 212, 255, 1)',
                pointBackgroundColor: 'rgba(0, 212, 255, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0, 212, 255, 1)',
                borderWidth: 2,
            }]
        };

        const chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    },
                    pointLabels: {
                        font: {
                            family: "'Inter', sans-serif",
                            size: 12
                        },
                        color: '#B0B0B0'
                    },
                    ticks: {
                        backdropColor: 'rgba(10, 10, 10, 0.8)',
                        color: '#B0B0B0',
                        stepSize: 20
                    },
                    min: 0,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 26, 26, 0.9)',
                    titleFont: {
                        family: "'Orbitron', monospace",
                        size: 14
                    },
                    bodyFont: {
                        family: "'Inter', sans-serif",
                        size: 12
                    },
                    padding: 10,
                    cornerRadius: 8,
                    borderColor: 'rgba(0, 212, 255, 0.5)',
                    borderWidth: 1
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeInOutQuint'
            }
        };

        new Chart(ctx, {
            type: 'radar',
            data: chartData,
            options: chartOptions
        });
    };

    // Animar o gráfico apenas quando ele estiver visível
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                createChart();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(skillsSection);
});