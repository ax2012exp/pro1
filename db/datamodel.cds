namespace anubhav.db;
using { managed } from '@sap/cds/common';

entity users :managed
{
    key ID : Integer;
    name : String(100);
    address : String(250);
}
