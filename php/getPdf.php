<?php
require("library/html2pdf/html2fpdf.php");
//print_r($_POST['p']);exit;
$htmlFile = 'https://resume-shahpranaf.c9users.io/#/generate';
$buffer = file_get_contents($htmlFile);
//print_r($buffer);
$pdf = new HTML2FPDF('P', 'mm', 'Letter');
$pdf->AddPage();
$pdf->WriteHTML($buffer);
$pdf->Output('test.pdf', 'F');
echo "YUP";
?>