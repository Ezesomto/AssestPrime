// Admin JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initAdminDashboard();
});

function initAdminDashboard() {
    // Check admin auth (simulated)
    checkAdminAuth();
    
    // Initialize admin functionality
    initUserManagement();
    initDepositApproval();
    initWithdrawalApproval();
    initSystemMonitoring();
}

function checkAdminAuth() {
    // In a real app, you would check admin credentials
    // This is just a simulation for the frontend
    if (window.location.pathname.includes('admin.html')) {
        const isAdmin = localStorage.getItem('adminLoggedIn');
        
        if (!isAdmin) {
            // Redirect to login if not logged in as admin
            window.location.href = 'login.html';
        }
    }
}

function initUserManagement() {
    const userItems = document.querySelectorAll('.user-item');
    
    if (userItems.length > 0) {
        userItems.forEach(item => {
            item.addEventListener('click', function() {
                // In a real app, this would open a user details modal
                console.log('Viewing user:', this.querySelector('.font-medium').textContent);
            });
        });
    }
}

function initDepositApproval() {
    const approveDepositButtons = document.querySelectorAll('.pending-item button.bg-green-500');
    const rejectDepositButtons = document.querySelectorAll('.pending-item button.bg-red-500');
    
    if (approveDepositButtons.length > 0) {
        approveDepositButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                const item = this.closest('.pending-item');
                if (item) {
                    // In a real app, this would call an API to approve the deposit
                    item.classList.add('opacity-50');
                    setTimeout(() => {
                        item.remove();
                    }, 500);
                }
            });
        });
    }
    
    if (rejectDepositButtons.length > 0) {
        rejectDepositButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                const item = this.closest('.pending-item');
                if (item) {
                    // In a real app, this would call an API to reject the deposit
                    item.classList.add('opacity-50');
                    setTimeout(() => {
                        item.remove();
                    }, 500);
                }
            });
        });
    }
}

function initWithdrawalApproval() {
    const approveWithdrawalButtons = document.querySelectorAll('.pending-item button.bg-green-500');
    const rejectWithdrawalButtons = document.querySelectorAll('.pending-item button.bg-red-500');
    
    if (approveWithdrawalButtons.length > 0) {
        approveWithdrawalButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                const item = this.closest('.pending-item');
                if (item) {
                    // In a real app, this would call an API to approve the withdrawal
                    item.classList.add('opacity-50');
                    setTimeout(() => {
                        item.remove();
                    // Update total withdrawals
                    updateTotalWithdrawals(item.querySelector('.font-medium').textContent);
                }, 500);
                }
            });
        });
    }
    
    if (rejectWithdrawalButtons.length > 0) {
        rejectWithdrawalButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                const item = this.closest('.pending-item');
                if (item) {
                    // In a real app, this would call an API to reject the withdrawal
                    item.classList.add('opacity-50');
                    setTimeout(() => {
                        item.remove();
                    }, 500);
                }
            });
        });
    }
    
    function updateTotalWithdrawals(amountStr) {
        const amount = parseFloat(amountStr.replace('$', '').replace(',', '')) || 0;
        const totalElement = document.querySelector('.admin-stats-card:nth-child(3) .text-3xl');
        
        if (totalElement) {
            const currentTotal = parseFloat(totalElement.textContent.replace('$', '').replace('M', '')) || 0;
            const newTotal = currentTotal + (amount / 1000000); // Add to millions
            totalElement.textContent = `$${newTotal.toFixed(1)}M`;
        }
    }
}

function initSystemMonitoring() {
    // Simulate real-time system monitoring
    const cpuUsageElement = document.querySelector('.bg-blue-400');
    const memoryUsageElement = document.querySelector('.bg-purple-400');
    const diskUsageElement = document.querySelector('.bg-green-400');
    
    if (cpuUsageElement && memoryUsageElement && diskUsageElement) {
        // Random fluctuations for demo purposes
        setInterval(() => {
            // CPU usage (between 30% and 70%)
            const cpuVariation = Math.random() * 0.4 - 0.2;
            const currentCpu = parseFloat(cpuUsageElement.style.width) || 42;
            const newCpu = Math.min(Math.max(currentCpu + cpuVariation, 30), 70);
            cpuUsageElement.style.width = `${newCpu}%`;
            cpuUsageElement.previousElementSibling.querySelector('span:last-child').textContent = `${Math.round(newCpu)}%`;
            
            // Memory usage (between 50% and 80%)
            const memoryVariation = Math.random() * 0.3 - 0.15;
            const currentMemory = parseFloat(memoryUsageElement.style.width) || 65;
            const newMemory = Math.min(Math.max(currentMemory + memoryVariation, 50), 80);
            memoryUsageElement.style.width = `${newMemory}%`;
            memoryUsageElement.previousElementSibling.querySelector('span:last-child').textContent = `${Math.round(newMemory)}%`;
            
            // Disk usage (slow increase)
            const currentDisk = parseFloat(diskUsageElement.style.width) || 38;
            const newDisk = Math.min(currentDisk + 0.01, 80);
            diskUsageElement.style.width = `${newDisk}%`;
            diskUsageElement.previousElementSibling.querySelector('span:last-child').textContent = `${Math.round(newDisk)}%`;
        }, 3000);
    }
}