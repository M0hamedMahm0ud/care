<?php
namespace App\Http\Controllers;

use http\Client\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AuthApi extends Controller
{
    function register(Request $request)
    {
        DB::insert('insert into user (id, nid) values (?, ?)', array($request->input()["id"], $request->input()["nid"]));
        return json_encode("done");
    }

    function login(Request $request)
    {
        $results = DB::select('select * from user where id = ?', array($request->input()["id"]));
            if ($results) {
                if($results[0]->{'nid'} == $request->input()["nid"]){
                    return json_encode("done");
                }else{return json_encode("national id is wrong");}
            }else{return json_encode("this id not exit");}
    }
}
