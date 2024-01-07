var data = [
    {
        "datasetid": "euro-exchange-rates",
        "recordid": "43f5940bfd6881b2f8e0c434a3a96f229a8a1054",
        "fields": {
            "date": "2022-03-06",
            "currency": "USD",
            "rate": 1.0929
        }
    },
    {
        "datasetid": "euro-exchange-rates",
        "recordid": "1787f87bcf029a223e001d6f88750fe0ca6772d1",
        "fields": {
            "date": "2022-03-06",
            "currency": "AUD",
            "rate": 1.4872
        }
    },
    {
        "datasetid": "euro-exchange-rates",
        "recordid": "756f0f685431156ad1d3bc24b91d574c5a6f00fa",
        "fields": {
            "date": "2022-03-06",
            "currency": "CAD",
            "rate": 1.3937
        }
    },
    {
        "datasetid": "euro-exchange-rates",
        "recordid": "58e15a0abb6fc40d08a10ae0f58fc2c9525b267a",
        "fields": {
            "date": "2022-03-06",
            "currency": "GBP",
            "rate": 0.8239
        }
    },
    {
        "datasetid": "euro-exchange-rates",
        "recordid": "4f7879e2c8e97bc11ae065f748a2e13f2cd73c71",
        "fields": {
            "date": "2022-03-06",
            "currency": "SEK",
            "rate": 10.7935
        }
    },
    {
        "datasetid": "euro-exchange-rates",
        "recordid": "e3f948548d1479dff8b10aeaaf0c247e17b70897",
        "fields": {
            "date": "2022-03-06",
            "currency": "MXN",
            "rate": 22.7543
        }
    }
]


document.addEventListener('DOMContentLoaded', function () {
    var tableBody = document.getElementById('tableBody');

    data.forEach(function (item) {
        var row = document.createElement('tr');
        var cell1 = document.createElement('td');
        var cell2 = document.createElement('td');
        var cell3 = document.createElement('td');
        var innerTable = document.createElement('table');
        innerTable.className = 'inner-table';

        var innerRow = innerTable.insertRow();
        innerRow.insertCell(0).textContent = 'Date';
        innerRow.insertCell(1).textContent = 'Currency';
        innerRow.insertCell(2).textContent = 'Rate';

        innerRow = innerTable.insertRow();
        innerRow.insertCell(0).textContent = item.fields.date;
        innerRow.insertCell(1).textContent = item.fields.currency;
        innerRow.insertCell(2).textContent = item.fields.rate;

        cell1.textContent = item.datasetid;
        cell2.textContent = item.recordid;
        cell3.appendChild(innerTable);

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);

        tableBody.appendChild(row);
    });
});
