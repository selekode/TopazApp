// Sample chart data (replace with real data from your app)
    const entriesCtx = document.getElementById('entriesChart').getContext('2d')
    const moodCtx = document.getElementById('moodChart').getContext('2d')

    const entriesChart = new Chart(entriesCtx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{ label: 'Entries', data: [1, 2, 1, 3, 2, 0, 1], tension: 0.3 }]
      },
      options: { responsive: true, plugins: { legend: { display: false } } }
    })

    const moodChart = new Chart(moodCtx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{ label: 'Avg Mood', data: [6.5, 7.2, 7.0, 8.1, 6.9, 5.8, 7.3], fill: true, tension: 0.3 }]
      },
      options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { suggestedMin: 0, suggestedMax: 10 } } }
    })