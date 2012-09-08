/*
 * Player.js
 * Sprite representing the active player. 
 * 
 * Copyright (c) Sako 2010 - zomgsako@gmail.com
 * Freely redistributable and editable.
*/

extend(Player, Sprite);

function Player()
{
	this.w = 24;
	this.h = 31;
	
	this.image = null;
	this.color = 'rgba(255,0,0,255)';
	
	this.dead = 0;
	this.health = 10;
	this.graze = 0;
	
	this.movements = [];
	this.movement = null;
	
	this.power = 0; // Marisa's shooting power
}

Player.prototype.move = function()
{
	var m = 5; // normal movement
	if (sm_p == 1) m = 2; // slow movement
	
	// diagonal movement
	if (up_p + dw_p + lf_p + rg_p > 1)
    	m = m * 0.7;
	
	// refresh player position no grazing
	if (up_p == 1) 
		this.movement.cy -= m;
	if (dw_p == 1) 
		this.movement.cy += m;
	if (lf_p == 1) 
		this.movement.cx -= m;
	if (rg_p == 1) 
		this.movement.cx += m;
	
	// avoid going out of the screen
	if (this.movement.cx >= bg.w - bg.padding) 
		this.movement.cx = bg.w - bg.padding;
	if (this.movement.cx <= bg.padding) 
		this.movement.cx = bg.padding;
	if (this.movement.cy >= bg.h - bg.padding) 
		this.movement.cy = bg.h - bg.padding;
	if (this.movement.cy <= bg.padding)
		this.movement.cy = bg.padding;
}

// fire bullets
Player.prototype.shoot = function()
{	
	if (this.power < 10)
	{
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-4, this.movement.cy, this.movement.cx-4, -10);
		b1.addMovement(m1);
		bullets[bullets.length] = b1;
		
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+4, this.movement.cy, this.movement.cx+4, -10);
		b2.addMovement(m2);
		bullets[bullets.length] = b2;
	}
	else if (this.power < 20)
	{
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-5, this.movement.cy, this.movement.cx-12, -10);
		b1.addMovement(m1);
		bullets[bullets.length] = b1;
		
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+5, this.movement.cy, this.movement.cx+12, -10);
		b2.addMovement(m2);
		bullets[bullets.length] = b2;
		
		var b3 = new PlayerBullet();
		var m3 = new Movement(25, this.movement.cx, this.movement.cy, this.movement.cx, -10);
		b3.addMovement(m3);
		bullets[bullets.length] = b3;
	}
	else if (this.power < 30)
	{
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-4, this.movement.cy, this.movement.cx-6, -10);
		b1.addMovement(m1);
		bullets[bullets.length] = b1;
		
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+4, this.movement.cy, this.movement.cx+6, -10);
		b2.addMovement(m2);
		bullets[bullets.length] = b2;
		
		var b3 = new PlayerBullet();
		var m3 = new Movement(25, this.movement.cx-8, this.movement.cy, this.movement.cx-18, -10);
		b3.addMovement(m3);
		bullets[bullets.length] = b3;
		
		var b4 = new PlayerBullet();
		var m4 = new Movement(25, this.movement.cx+8, this.movement.cy, this.movement.cx+18, -10);
		b4.addMovement(m4);
		bullets[bullets.length] = b4;
	}
	else if (this.power < 40)
	{
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-12, this.movement.cy, this.movement.cx-30, -10);
		b1.addMovement(m1);
		bullets[bullets.length] = b1;
		
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+12, this.movement.cy, this.movement.cx+30, -10);
		b2.addMovement(m2);
		bullets[bullets.length] = b2;
		
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-6, this.movement.cy, this.movement.cx-15, -10);
		b1.addMovement(m1);
		bullets[bullets.length] = b1;
		
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+6, this.movement.cy, this.movement.cx+15, -10);
		b2.addMovement(m2);
		bullets[bullets.length] = b2;
		
		var b3 = new PlayerBullet();
		var m3 = new Movement(25, this.movement.cx, this.movement.cy, this.movement.cx, -10);
		b3.addMovement(m3);
		bullets[bullets.length] = b3;
	}
	else if (this.power < 50)
	{
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-40, this.movement.cy, this.movement.cx-80, -10);
		b1.addMovement(m1);
		b1.image = img_b6a;
		b1.w = 10;
		b1.h = 10;
		bullets[bullets.length] = b1;
		
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+40, this.movement.cy, this.movement.cx+80, -10);
		b2.addMovement(m2);
		b2.image = img_b6a;
		b2.w = 10;
		b2.h = 10;
		bullets[bullets.length] = b2;
	        
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-14, this.movement.cy, this.movement.cx-30, -10);
		b1.addMovement(m1);
		bullets[bullets.length] = b1;
	        
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+14, this.movement.cy, this.movement.cx+30, -10);
		b2.addMovement(m2);
		bullets[bullets.length] = b2;
	        
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-8, this.movement.cy, this.movement.cx-15, -10);
		b1.addMovement(m1);
		bullets[bullets.length] = b1;
	        
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+8, this.movement.cy, this.movement.cx+15, -10);
		b2.addMovement(m2);
		bullets[bullets.length] = b2;
	        
		var b3 = new PlayerBullet();
		var m3 = new Movement(25, this.movement.cx, this.movement.cy, this.movement.cx, -10);
		b3.addMovement(m3);
		bullets[bullets.length] = b3;
	}
	else if (this.power < 60)
	{
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-46, this.movement.cy, this.movement.cx-86, -10);
		b1.addMovement(m1);
		b1.image = img_b6a;
		b1.w = 6;
		b1.h = 16;
		bullets[bullets.length] = b1;
		
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+46, this.movement.cy, this.movement.cx+86, -10);
		b2.addMovement(m2);
		b2.image = img_b6a;
		b2.w = 6;
		b2.h = 16;
		bullets[bullets.length] = b2;
	        
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-40, this.movement.cy, this.movement.cx-80, -10);
		b1.addMovement(m1);
		b1.image = img_b6a;
		b1.w = 6;
		b1.h = 16;
		bullets[bullets.length] = b1;
		
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+40, this.movement.cy, this.movement.cx+80, -10);
		b2.addMovement(m2);
		b2.image = img_b6a;
		b2.w = 6;
		b2.h = 16;
		bullets[bullets.length] = b2;
	        
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-14, this.movement.cy, this.movement.cx-30, -10);
		b1.addMovement(m1);
		bullets[bullets.length] = b1;
	        
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+14, this.movement.cy, this.movement.cx+30, -10);
		b2.addMovement(m2);
		bullets[bullets.length] = b2;
	        
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-8, this.movement.cy, this.movement.cx-15, -10);
		b1.addMovement(m1);
		bullets[bullets.length] = b1;
	        
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+8, this.movement.cy, this.movement.cx+15, -10);
		b2.addMovement(m2);
		bullets[bullets.length] = b2;
	        
		var b3 = new PlayerBullet();
		var m3 = new Movement(25, this.movement.cx, this.movement.cy, this.movement.cx, -10);
		b3.addMovement(m3);
		bullets[bullets.length] = b3;
	}
	else if (this.power >= 60)
	{
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-52, this.movement.cy, this.movement.cx-92, -10);
		b1.addMovement(m1);
		b1.image = img_b6a;
		b1.w = 6;
		b1.h = 16;
		bullets[bullets.length] = b1;
	        
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+52, this.movement.cy, this.movement.cx+92, -10);
		b2.addMovement(m2);
		b2.image = img_b6a;
		b2.w = 6;
		b2.h = 16;
		bullets[bullets.length] = b2;
	        
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-46, this.movement.cy, this.movement.cx-86, -10);
		b1.addMovement(m1);
		b1.image = img_b6a;
		b1.w = 6;
		b1.h = 16;
		bullets[bullets.length] = b1;
	        
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+46, this.movement.cy, this.movement.cx+86, -10);
		b2.addMovement(m2);
		b2.image = img_b6a;
		b2.w = 6;
		b2.h = 16;
		bullets[bullets.length] = b2;
	        
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-40, this.movement.cy, this.movement.cx-80, -10);
		b1.addMovement(m1);
		b1.image = img_b6a;
		b1.w = 6;
		b1.h = 16;
		bullets[bullets.length] = b1;
	        
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+40, this.movement.cy, this.movement.cx+80, -10);
		b2.addMovement(m2);
		b2.image = img_b6a;
		b2.w = 6;
		b2.h = 16;
		bullets[bullets.length] = b2;
	        
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-14, this.movement.cy, this.movement.cx-30, -10);
		b1.addMovement(m1);
		bullets[bullets.length] = b1;
	        
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+14, this.movement.cy, this.movement.cx+30, -10);
		b2.addMovement(m2);
		bullets[bullets.length] = b2;
	        
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-8, this.movement.cy, this.movement.cx-15, -10);
		b1.addMovement(m1);
		bullets[bullets.length] = b1;
	        
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+8, this.movement.cy, this.movement.cx+15, -10);
		b2.addMovement(m2);
		bullets[bullets.length] = b2;
	        
		var b3 = new PlayerBullet();
		var m3 = new Movement(25, this.movement.cx, this.movement.cy, this.movement.cx, -10);
		b3.addMovement(m3);
		bullets[bullets.length] = b3;
	}
}
	
Player.prototype.work = function()
{
	Sprite.prototype.work.call(this);
	if (sh_p == 1) this.shoot();
}
