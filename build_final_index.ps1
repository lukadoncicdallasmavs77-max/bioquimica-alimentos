# build_final_index.ps1
$ErrorActionPreference = "Stop"

# 1. Carregar o template base e os módulos de dados/funcionalidades
$baseHtml = [System.IO.File]::ReadAllText("c:\Users\Lucas\Desktop\bora\template_base.html", [System.Text.Encoding]::UTF8)
$minData = [System.IO.File]::ReadAllText("c:\Users\Lucas\Desktop\bora\min_data.js", [System.Text.Encoding]::UTF8)
$bioData = [System.IO.File]::ReadAllText("c:\Users\Lucas\Desktop\bora\bio_data.js", [System.Text.Encoding]::UTF8)
$morData = [System.IO.File]::ReadAllText("c:\Users\Lucas\Desktop\bora\mor_data.js", [System.Text.Encoding]::UTF8)
$posData = [System.IO.File]::ReadAllText("c:\Users\Lucas\Desktop\bora\pos_data.js", [System.Text.Encoding]::UTF8)
$simData = [System.IO.File]::ReadAllText("c:\Users\Lucas\Desktop\bora\sim_bancada.js", [System.Text.Encoding]::UTF8)
$vdData = [System.IO.File]::ReadAllText("c:\Users\Lucas\Desktop\bora\visao_direta_data.js", [System.Text.Encoding]::UTF8)
$hallData = [System.IO.File]::ReadAllText("c:\Users\Lucas\Desktop\bora\hall_features.js", [System.Text.Encoding]::UTF8)

# 2. Montar o arquivo final index.html com arquitetura 100% autocontida
$finalHtml = $baseHtml + "`n`n" + $minData + "`n`n" + $bioData + "`n`n" + $morData + "`n`n" + $posData + "`n`n" + $simData + "`n`n" + $vdData + "`n`n" + $hallData + "`n`nap();render();`n</script></body></html>"

# 3. Salvar com encoding UTF8
[System.IO.File]::WriteAllText("c:\Users\Lucas\Desktop\bora\index.html", $finalHtml, [System.Text.Encoding]::UTF8)

Write-Host "index.html montado com sucesso! Tamanho final: $( (Get-Item 'c:\Users\Lucas\Desktop\bora\index.html').Length ) bytes"