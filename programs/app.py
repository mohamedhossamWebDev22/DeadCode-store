import time
from tkinter import *
from tkinter import messagebox


jsFile = open('update.js', 'a');jsFile2 = open('update1.js', 'a')


def program():#the program
    window = Tk()
    window.title('DashBoard')
    window.geometry('600x300')
    window.resizable(False, False)

    tit = Label(window, text="Loka Dashboard", width=600, fg='orange', bg='black', font=('Sans Serif', 30))
    tit.pack()

    def Edit():
        jsFile.write('//edit some info\n')
        jsFile2.write('//edit some info\n')

        img = str(input('Enter image name:'))
        txt = str(input('Enter new txt:'))

        jsFile.write("edit('" + img +"','" + txt + "')")
        jsFile.close()

        jsFile2.write("edit('" + img +"','" + txt + "')")
        jsFile2.close()
    def AddGame():
        jsFile.write('//Add funny game\n')

        img = str(input('Enter Icon name:'))
        name = str(input("Enter game's name:"))
        describe = str(input("Enter describtion of the game:"))
        link = str(input("Enter game's link:"))

        jsFile.write("addGame('"+ img + "', '" + name + "', '" + describe + "', '" + link + "')")

        jsFile.close()
    def editSocial():
        jsFile.write('//Edit social media links\n')

        jsFile2.write('//Edit social media links\n')

        face = str(input("Enter new Facebook Account:"))
        tik = str(input("Enter new TikTok Account"))
        
        jsFile.write("editSocial('"+ face + "', '" + tik + "')")

        jsFile.close()
        
        jsFile2.write("editSocial('"+ face + "', '" + tik + "')")

        jsFile2.close()

    addGame = Button(window, text="Add\nGame", fg='white', bg="green",font=('verdana', 10, 'bold'), command=AddGame)
    addGame.pack(side=TOP, expand=True, fill=X)

    editInfo = Button(window, text="edit\nInfo", fg="white", bg="orange",font=('verdana', 10, 'bold'), command=Edit)
    editInfo.pack(side=TOP, expand=True, fill=X)

    socialLink = Button(window, text="Edit\nsocialLinks", fg="white", bg="blue", font=('verdana', 10, 'bold'), command=editSocial)
    socialLink.pack(side=TOP, expand=True, fill=X)

    def GitUpdate():
        messagebox.showerror("ops..!", "تقريبا فيه باجايه هنا و مش هتشتغل\nاعمل بلوحة الاوامر ياخي \nيخربيت الكسل:(")


    updateBtn = Button(window, text="Update website", fg="white", bg="darkred", font=('verdana', 20, 'bold'), command=GitUpdate)
    updateBtn.pack(side=BOTTOM,fill=X)

    window.mainloop()

password = 'deadcode11'

#DeadCode
userInput = (str(input('Enter password, Malek:'))).lower()

if userInput == password or userInput == '0':
    print("ok")
    program()
    time.sleep(1.8)
else:
    print("password is wrong.")
    time.sleep(1.8)
