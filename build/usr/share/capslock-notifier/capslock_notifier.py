#!/usr/bin/env python3
import time
import threading
import notify2
from pynput.keyboard import Listener
from pystray import Icon, MenuItem, Menu
from PIL import Image, ImageDraw
from subprocess import check_output

caps_lock_state = None
icon = None

notify2.init("Caps Lock Notifier")

def send_notification(state):
    n = notify2.Notification(
        "CAPS LOCK",
        "Attivo 🔠" if state else "Disattivato 🔡"
    )
    n.set_timeout(1000)
    n.show()

def create_icon(state):
    image = Image.new('RGB', (64, 64), color=(0, 0, 0, 0))
    draw = ImageDraw.Draw(image)
    if state:
        draw.text((10, 20), "A", fill="white")
    else:
        draw.text((10, 20), "a", fill="gray")
    return image

def update_icon(state):
    global icon
    icon.icon = create_icon(state)
    icon.title = f"Caps Lock {'attivo 🔠' if state else 'disattivo 🔡'}"

def is_capslock_on():
    output = check_output("xset q", shell=True).decode()
    return "Caps Lock:   on" in output

def on_press(key):
    global caps_lock_state
    new_state = is_capslock_on()
    if new_state != caps_lock_state:
        caps_lock_state = new_state
        send_notification(caps_lock_state)
        update_icon(caps_lock_state)

def run_icon():
    global icon
    global caps_lock_state
    caps_lock_state = is_capslock_on()
    icon = Icon("capslock")
    icon.icon = create_icon(caps_lock_state)
    icon.menu = Menu(MenuItem("Esci", lambda i: icon.stop()))
    icon.run()

if __name__ == "__main__":
    caps_lock_state = is_capslock_on()
    threading.Thread(target=run_icon, daemon=True).start()
    from pynput import keyboard
    with keyboard.Listener(on_press=on_press) as listener:
        listener.join()
