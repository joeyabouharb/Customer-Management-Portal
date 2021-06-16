using Microsoft.EntityFrameworkCore.Migrations;

namespace api.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TblCustomers",
                columns: table => new
                {
                    CustomerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Surname = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    HomeAddress = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TblCustomers", x => x.CustomerId);
                });

            migrationBuilder.InsertData(
                table: "TblCustomers",
                columns: new[] { "CustomerId", "Email", "FirstName", "HomeAddress", "Surname" },
                values: new object[,]
                {
                    { 1, "joey.test@gmail.com", "Joey", "13 fake street belmore", "Smith" },
                    { 2, "james.test@gmail.com", "James", "14 fake street belmore", "Doe" },
                    { 3, "john.test@gmail.com", "John", "15 fake street belmore", "Mcafee" },
                    { 4, "peter.test@gmail.com", "Peter", "16 fake street belmore", "harb" },
                    { 5, "frodo.test@gmail.com", "frodo", "17 fake street belmore", "baggins" },
                    { 6, "bran.test@gmail.com", "bran", "18 fake street belmore", "stark" },
                    { 7, "freddie.test@gmail.com", "freddie", "19 fake street belmore", "murcury" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_TblCustomers_Email",
                table: "TblCustomers",
                column: "Email",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TblCustomers");
        }
    }
}
