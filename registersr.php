<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $dataToSave = $_POST['data'];

    if (empty($dataToSave)) {
        echo json_encode(array('status' => 'error', 'message' => 'Data is empty'));
    } else {
        $file = fopen("registersr.csv", "a");
        fputcsv($file, explode(',', $dataToSave));
        fclose($file);

        echo json_encode(array('status' => 'success', 'message' => 'Data saved successfully'));
    }
}
else {
    echo json_encode(array('status' => 'error', 'message' => 'Invalid request method'));
}
