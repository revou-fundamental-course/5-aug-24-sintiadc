function calculateBMI() {
    // Ambil nilai input dari form
    const beratBadan = parseFloat(document.getElementById("input-beratbadan").value);
    const tinggiBadanCm = parseFloat(document.getElementById("input-tinggibadan").value);
    const tinggiBadanM = tinggiBadanCm / 100;

    // Hitung BMI
    const bmi = (beratBadan / (tinggiBadanM * tinggiBadanM)).toFixed(2);

    // Tentukan status BMI
    let status = '';
    let status2 = '';
    let description = '';
    let descriptionpenyakit = '';
    let penyakit1 = '';
    let penyakit2 = '';
    let penyakit3 = '';
    
    if (bmi < 18.5) {
        status2 = "Anda kekurangan berat badan";
        status = "Kekurangan berat badan";
        description = "Jika BMI Anda berada dalam kategori kekurangan berat badan, tubuh Anda mungkin tidak mendapatkan nutrisi yang cukup untuk berfungsi secara optimal. Ini bisa disebabkan oleh berbagai faktor, termasuk pola makan yang tidak memadai atau kondisi kesehatan tertentu. Disarankan untuk meningkatkan asupan kalori dan memastikan diet Anda kaya akan nutrisi penting. Konsultasikan dengan profesional kesehatan untuk mendapatkan saran yang tepat.";
        descriptionpenyakit = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan kekurangan berat badan Anda.";
        penyakit1 = "Kekurangan Nutrisi";
        penyakit2 = "Kelemahan Imun";
        penyakit3 = "Masalah Kesehatan Mental";

    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status2 = "Berat badan anda normal (ideal)";
        status = "Normal (ideal)";
        description = "Jika BMI Anda berada dalam kategori normal atau ideal, berarti berat badan Anda sesuai dengan tinggi badan Anda dan umumnya dianggap sehat. Anda berada dalam kisaran yang optimal untuk kesehatan umum. Teruslah menjaga pola makan seimbang dan aktif secara fisik untuk mempertahankan berat badan ini dan mendukung kesehatan yang berkelanjutan.";
        descriptionpenyakit = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda berada dalam kategori berat badan normal, namun tetap penting untuk menjaga pola makan yang sehat dan aktif secara fisik.";
        penyakit1 = "Tidak Ada Risiko Spesifik Terkait BMI";
        penyakit2 = "Pemantauan Kesehatan Rutin";
        penyakit3 = "Penting untuk Tetap Aktif dan Sehat";

    } else if (bmi >= 25.0 && bmi <= 29.9) {
        status2 = "Anda memiliki kelebihan berat badan berlebih";
        status = "Kelebihan berat badan";
        description = "Anda berada dalam kategori overweight atau berat badan berlebin. Cara terbaik untuk menurunkan berat badan bdalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.<br>Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
        descriptionpenyakit = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.";
        penyakit1 = "Diabetes";
        penyakit2 = "Hipertensi";
        penyakit3 = "Sakit Jantung";
    } else {
        status2 = "Anda terlalu kegemukan (obesitas)";
        status = "Kegemukan (Obesitas)";
        description = "Jika BMI Anda berada dalam kategori kegemukan atau obesitas, berarti berat badan Anda melebihi kisaran normal dan dapat meningkatkan risiko masalah kesehatan seperti diabetes, hipertensi, dan penyakit jantung. Disarankan untuk mengatur asupan kalori dengan cermat dan meningkatkan aktivitas fisik. Berkonsultasilah dengan ahli gizi atau profesional kesehatan untuk mendapatkan rencana penurunan berat badan yang aman dan efektif.";
        descriptionpenyakit = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan berlebih Anda.";
        penyakit1 = "Diabetes";
        penyakit2 = "Hipertensi";
        penyakit3 = "Sakit Jantung";

    }

    // Tampilkan hasil di halaman
    document.getElementById("bmi-result").textContent = bmi;
    document.getElementById("bmi-status").textContent = status;
    document.getElementById("bmi-status2").textContent = status2;
    document.getElementById("bmi-description").textContent = description;
    document.getElementById("bmi-description2").textContent = descriptionpenyakit;
    document.getElementById("bmi-penyakit1").textContent = penyakit1;
    document.getElementById("bmi-penyakit2").textContent = penyakit2;
    document.getElementById("bmi-penyakit3").textContent = penyakit3;

    

}
