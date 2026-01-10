candy_price=0.5
money_paid=int(input("Enter the amount of money paid for the candy: "))
if money_paid<=0:
    money_paid=int(input("Enter the amount of money paid for the candy: "))

if money_paid > candy_price:
    change = money_paid - candy_price
    print(f"Change to be returned: ${change:.2f}")
elif money_paid == candy_price:
    print("No change to be returned.")
else:
    print("Insufficient funds. Pay more to buy the candy.")