# 0. Before touching the new VPS
Do this first on your own computer.
```
ssh-keygen -t ed25519 -C "deploy-vps"
```
This creates:
private key: ~/.ssh/id_ed25519
public key: ~/.ssh/id_ed25519.pub
Show your public key:
```
cat ~/.ssh/id_ed25519.pub
```
Show your private key:
```
cat ~/.ssh/id_ed25519
```
save it in save place on your PC.
## Login to the new VPS as root the first time
```
ssh root@YOUR_SERVER_IP
```
Then update system:
```
apt update && apt upgrade -y
```
Install basic tools:
```
apt install -y curl git ufw fail2ban nginx
```
Create a non-root deploy user
```
adduser deploy
usermod -aG sudo deploy
```
Create SSH folder for deploy user & Paste your public key from your PC into that file.:
```
mkdir -p /home/deploy/.ssh
nano /home/deploy/.ssh/authorized_keys
```
Paste your public key from your PC into that file.
```
chmod 700 /home/deploy/.ssh
chmod 600 /home/deploy/.ssh/authorized_keys
chown -R deploy:deploy /home/deploy/.ssh
```
Test login as deploy user before changing SSH settings
```
ssh deploy@YOUR_SERVER_IP
```
Harden SSH immediately
```
sudo nano /etc/ssh/sshd_config
```
Make sure these lines are set:

#### PermitRootLogin no
#### PasswordAuthentication no
#### PubkeyAuthentication yes
Enable firewall
```
ufw default deny incoming
ufw default allow outgoing
ufw allow 22
ufw allow 80
ufw allow 443
ufw enable
ufw status
```
Enable fail2ban
```
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```
## 1. Install Node.js, git, nginx

```sudo curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2
```
```
node -v
npm -v
pm2 -v
```
## 2. Clone your GitHub project
```
mkdir -p /home/deploy/website
cd /deploy/website
sudo git clone https://github.com/Adamtruong6868/VNBweb-nextjs.git vnbnode
sudo chown -R $USER:$USER vnbnode
cd /deploy/website/vnbnode
```
Protect env file
```
chmod 600 .env.local
```
## 3. Install dependencies
```
npm install --ignore-scripts
```
## 4. Build the Next.js app
```
npm run build
```

## 5.Start the app
```
npm run start
```
If it starts properly, stop it with Ctrl + C, then run with PM2:
```
pm2 start npm --name vnbweb -- start
pm2 save
pm2 startup
```
Check status:
```
pm2 status
pm2 logs vnbweb
```
## 6. Configure Nginx reverse proxy

Create config:
```
sudo nano /etc/nginx/sites-available/vnbnode.com
```

```
server {
    listen 80;
    server_name vnbnode.com www.vnbnode.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```
Enable it:
```
sudo ln -s /etc/nginx/sites-available/vnbnode.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```
## 7. Open firewall if needed
```
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```
## 8. Add HTTPS
```
sudo apt install -y certbot python3-certbot-nginx
```
Issue certificate:
```
sudo certbot --nginx -d vnbnode.com -d www.vnbnode.com
```
## 9. Final security checks
```
sudo ss -tulnp
sudo systemctl status fail2ban
sudo ufw status
pm2 status
```
## Future update flow, When you change code on GitHub:
```
cd /var/www/vnbnode
git pull
npm install
npm run build
pm2 restart vnbweb
```
