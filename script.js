
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Home - Google Drive</title>
    <link rel="icon" href="https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="https://pastebin.com/raw/93L1kyD5">
</head>
<body>
    <header class="top-nav">
        <button class="nav-button" id="backButton">
            <i class="fas fa-arrow-left"></i>
        </button>
        <button class="nav-button" id="settingsButton">
            <i class="fas fa-cog"></i>
        </button>
    </header>
    <main class="main">
        <div class="grid">
            <div class="card">
                <iframe class="iframe" id="filePresenter" name="innerFrame" frameborder="0" allowfullscreen="true"
                    src="https://effervescent-faloodeh-92e33b.netlify.app/storage/1/index.html">
                </iframe>
                <div class="info">
                    <h2 class="fileName">1</h2>
                    <div class="controls">
                        <span class="control" onclick="fullscreen()">
                            <i class="fas fa-expand"></i>
                        </span>
                        <span class="control" onclick="reload()">
                            <i class="fas fa-sync-alt"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <script src="https://pastebin.com/raw/8QM1D12k"></script>
</body>
</html>
