const SUPABASE_URL = 'https://prlhztxklybjrkzgpnil.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBybGh6dHhrbHlianJremdwbmlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwMzQ0ODUsImV4cCI6MjA4NjYxMDQ4NX0.AWdgoQLGDAdsoofvqC4pnBl6UY_ek-y1NU8250-vFVk';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById('google-login').addEventListener('click', async () => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: window.location.origin + '/index.html'
        }
    });
    if (error) {
        alert('Gagal login Google: ' + error.message);
    }
});

document.getElementById('admin-login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
    const errorDiv = document.getElementById('admin-error');
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        localStorage.setItem('admin', 'true');
        window.location.href = '../index.html';
    } else {
        errorDiv.textContent = 'Username atau password salah.';
    }
});