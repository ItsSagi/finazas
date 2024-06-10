document.addEventListener('DOMContentLoaded', () => {
    const incomeForm = document.getElementById('income-form');
    const expenseForm = document.getElementById('expense-form');
    const incomeList = document.getElementById('income-list');
    const expenseList = document.getElementById('expense-list');
    const totalIncomeElement = document.getElementById('total-income');
    const totalExpenseElement = document.getElementById('total-expense');
    const balanceElement = document.getElementById('balance');

    let totalIncome = 0;
    let totalExpense = 0;

    function updateSummary() {
        totalIncomeElement.textContent = totalIncome;
        totalExpenseElement.textContent = totalExpense;
        balanceElement.textContent = totalIncome - totalExpense;
    }

    incomeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const description = document.getElementById('income-description').value;
        const amount = parseFloat(document.getElementById('income-amount').value);

        const listItem = document.createElement('li');
        listItem.textContent = `${description}: $${amount}`;
        incomeList.appendChild(listItem);

        totalIncome += amount;
        updateSummary();

        incomeForm.reset();
    });

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const description = document.getElementById('expense-description').value;
        const amount = parseFloat(document.getElementById('expense-amount').value);

        const listItem = document.createElement('li');
        listItem.textContent = `${description}: $${amount}`;
        listItem.classList.add('expense');
        expenseList.appendChild(listItem);

        totalExpense += amount;
        updateSummary();

        expenseForm.reset();
    });
});
